import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { message } from 'antd';
import TrialDetailHeader from './TrialDetailHeader';
import CardSection from './CardSection';
import { sortList, getFilteredData } from './trialList-helpers';
import Loading from '../../common/Loading';

const CardContainer = styled.div`
  padding: 1rem;
`;

class TrialList extends Component {
  state = {
    loading: true,
    // trialsArr: [], //if needed
  };

  async componentDidMount() {
    const { history, location } = this.props;
    const { setformatedPatients, setfilteredPatientsInfo } = this.props;

    if (location.state && location.state.length > 0) {
      const [patientsInfo] = location.state;
      if (Array.isArray(patientsInfo)) {
        try {
          const {
            patientsInfo: filteredPatientsInfo,
            formatedPatients,
            // trialsArr: originalTrialsArr,
          } = await getFilteredData(patientsInfo);
          filteredPatientsInfo.forEach(async ({ matchedTrials }, index) => {
            // looping over patients
            const filteredPatientsInfoWith = await this.getDistance(
              matchedTrials.data,
              undefined,
              filteredPatientsInfo,
              setfilteredPatientsInfo
            );
          });

          setfilteredPatientsInfo(filteredPatientsInfo);
          setformatedPatients(formatedPatients);

          return this.setState({
            loading: false,
            // trialsArr: originalTrialsArr,
          });
        } catch (err) {
          return message.error('something went wrong! please try again');
        }
      }
    } else if (this.props.filteredPatientsInfo[0]) {
      return this.setState({
        loading: false,
      });
    }
    return history.push('/');
  }

  getDistance = (filteredPatientsInfo, patientPostcode = 'E1 7AX') => {
    // looping over trail
    filteredPatientsInfo.forEach(({ Locations }, index) => {
      // looping over locations of every trail
      const trialPostcodes = Locations.map(obj => {
        const {
          Facility: {
            Address: { Zip },
          },
        } = obj;
        return Zip;
      });

      Promise.all(this.splitArrays([patientPostcode, ...trialPostcodes]))
        .then(obj => {
          return obj.reduce((acc, val) => acc.concat(val.data.result), []);
        })
        .then(results => {
          const pateintLocation = results.shift();
          const trailsDistance = {};
          results.forEach(({ query, result }) => {
            // if the api didn't find the location for the postcode
            if (result === null) {
              return;
            }
            const { longitude, latitude } = result;
            const distance = this.getDistanceFromLatLonInKm(
              +pateintLocation.result.latitude,
              +pateintLocation.result.longitude,
              +latitude,
              +longitude
            );
            trailsDistance[query] = distance;
          });

          Locations.forEach(location => {
            const {
              Facility: {
                Address: { Zip },
              },
            } = location;
            location.Facility.Address.distance = trailsDistance[Zip];
          });

          filteredPatientsInfo[index].Locations = Locations.filter(obj => {
            return obj.Facility.Address.distance;
          })
            .sort((a, b) => {
              return (
                +a.Facility.Address.distance - +b.Facility.Address.distance
              );
            })
            .splice(0, 5);
        });
    });
  };

  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = this.deg2rad(lat2 - lat1); // this.deg2rad below
    const dLon = this.deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km

    return (d / 1.6).toFixed(2); // Distance in miles
  }

  sortList = value => {
    const {
      filteredPatientsInfo: patientsInfo,
      setfilteredPatientsInfo,
    } = this.props;
    const sortedList = sortList(patientsInfo, value);
    setfilteredPatientsInfo(sortedList);
  };

  deg2rad = deg => {
    return deg * (Math.PI / 180);
  };

  fetchA = postcodes => {
    return axios.post('https://api.postcodes.io/postcodes', { postcodes });
  };

  splitArrays(arr, tmpNumb, acc = []) {
    tmpNumb = acc[0] ? tmpNumb - 100 : arr.length;
    acc.push(this.fetchA(arr.splice(0, 100)));
    return tmpNumb > 1 ? this.splitArrays(arr, tmpNumb, acc) : acc;
  }

  render() {
    const { loading } = this.state;
    const { filteredPatientsInfo: patientsInfo, formatedPatients } = this.props;
    return loading ? (
      <Loading />
    ) : (
      <>
        <TrialDetailHeader
          patientsInfo={formatedPatients}
          sortList={this.sortList}
        />
        <CardContainer>
          {patientsInfo.map(patient => (
            <CardSection key={Date.now() / Math.random()} data={patient} />
          ))}
        </CardContainer>
      </>
    );
  }
}

export default TrialList;
