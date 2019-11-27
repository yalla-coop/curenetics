import axios from 'axios';
import cloneDeep from 'clone-deep';

import {
  filterByOverallStatus,
  filterByAllCriteria,
} from '../../../helpers/filter';
import { TRIAL_API } from '../../../constants/urls';

// this just to merge each patient with it own trial
// in one array so we can create one pdf file for all
// of the patients and their matched trial
export const reformatShape = (patient, matchedTrials) => {
  // const clonedTrials = cloneDeep(matchedTrials);
  const { matchedTrials: trials, ...patientInfo } = patient;
  return matchedTrials.data.map(trial => {
    /* eslint-disable no-param-reassign */
    trial.patientInfo = patientInfo;
    return trial;
  });
};

export const sortList = (patientsInfo, value) => {
  const sortedList = [...patientsInfo].sort((a, b) => {
    if (a[value] < b[value]) {
      return -1;
    }
    if (a[value] > b[value]) {
      return 1;
    }
    return 0;
  });
  return sortedList;
};

// handle the filtered data

const getTrials = async () => {
  const {
    data: { results },
  } = await axios.get(TRIAL_API);
  // filter for recruiting and unknown status
  return filterByOverallStatus(results);
};

// leave handling the error to the UI
export const getFilteredData = async (patientsInfo, cb) => {
  const formatedPatients = [];
  const trialsArr = await getTrials();
  Promise.all(
    patientsInfo.map(async patient => {
      const matchedTrials = filterByAllCriteria(trialsArr, patient);
      console.log('before getDstance');
      const patientTrials = await getDistance(matchedTrials /* , postcode */);

      console.log('after getDistatnce', patientTrials);
      // console.log('getfilterdData, ', matchedTrials);
      formatedPatients.push(...reformatShape(patient, patientTrials));
      // eslint-disable-next-line no-param-reassign
      patient.matchedTrials = patientTrials;
      // console.log('log');
      return patient;
    })
  ).then(arr => {
    console.log('calling the callback', arr);
    cb(patientsInfo, formatedPatients);
  });
  console.log('calling outside');
  /* return {
    patientsInfo,
    formatedPatients,
    // trialsArr, //if needed
  }; */
};

const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km

  return (d / 1.6).toFixed(2); // Distance in miles
};

const fetchA = postcodes => {
  return axios.post('https://api.postcodes.io/postcodes', { postcodes });
};

const splitArrays = async (arr, tmpNumb, acc = []) => {
  tmpNumb = acc[0] ? tmpNumb - 100 : arr.length;
  const a = await fetchA(arr.splice(0, 100));
  // console.log('a',a);
  acc.push(...a.data.result);
  return tmpNumb > 1 ? splitArrays(arr, tmpNumb, acc) : acc;
};

function getDistance(patientTrials, patientPostcode = 'E1 7AX') {
  // looping over trail

  return patientTrials.data.map(({ Locations }, index) => {
    // looping over locations of every trail
    const trialPostcodes = Locations.map(obj => {
      const {
        Facility: {
          Address: { Zip },
        },
      } = obj;
      return Zip;
    });
    return splitArrays([patientPostcode, ...trialPostcodes])
      .then(res => {
        const arr = res.reduce((acc, val) => acc.concat(val), []);
        // console.log(arr);
        return arr;
      })
      .then(results => {
        console.log('resilts');
        const pateintLocation = results.shift();
        const trailsDistance = {};
        results.forEach(({ query, result }) => {
          // if the api didn't find the location for the postcode
          if (result === null) {
            return;
          }
          const { longitude, latitude } = result;
          const distance = getDistanceFromLatLonInKm(
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

        return (patientTrials.data[index].Locations = Locations.filter(obj => {
          return obj.Facility.Address.distance;
        })
          .sort((a, b) => {
            return +a.Facility.Address.distance - +b.Facility.Address.distance;
          })
          .splice(0, 5));
        // return patientTrials;
        /* return this.setState({
          loading: false,
          trialsArr: originalTrialsArr,
        }); */
      });
  });
}

/*
function getDistancePatient (patient, matchedTrial) {
  // Promise.all(
    //filteredPatientsInfo.map(({ matchedTrials }, index) => {
      // looping over patients
      console.log('promise', index);
      return getDistance(matchedTrials.data );
   // })
};
*/
