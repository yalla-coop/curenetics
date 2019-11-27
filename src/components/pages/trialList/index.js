import React, { Component } from 'react';
import styled from 'styled-components';
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
    filteredPatientsInfo: [],
    formatedPatients: [],
    // trialsArr: [], //if needed
  };

  async componentDidMount() {
    const { history, location } = this.props;
    // const { setformatedPatients, setfilteredPatientsInfo } = this.props;

    if (location.state && location.state.length > 0) {
      const [patientsInfo] = location.state;
      if (Array.isArray(patientsInfo)) {
        try {
          const {
            filteredPatientsInfo,
            formatedPatients,
            // trialsArr: originalTrialsArr,
          } = await getFilteredData(patientsInfo);

          this.setState({
            filteredPatientsInfo,
            formatedPatients,
            loading: false,
          });

          // setformatedPatients(formatedPatients);
          // setfilteredPatientsInfo(filteredPatientsInfo);
        } catch (err) {
          return message.error('something went wrong! please try again');
        }
      }
    } else if (this.props.filteredPatientsInfo[0]) {
      return this.setState({
        loading: false,
      });
    } else {
      return history.push('/');
    }
  }

  sortList = value => {
    const {
      filteredPatientsInfo: patientsInfo,
      setfilteredPatientsInfo,
    } = this.props;
    const sortedList = sortList(patientsInfo, value);
    setfilteredPatientsInfo(sortedList);
  };

  render() {
    const {
      loading,
      filteredPatientsInfo: patientsInfo,
      formatedPatients,
    } = this.state;

    // const { filteredPatientsInfo: patientsInfo, formatedPatients } = this.props;
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
