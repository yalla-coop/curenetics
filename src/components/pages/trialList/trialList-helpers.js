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

const deg2rad = deg => {
  return deg * (Math.PI / 180);
};

const getDistanceFromLatLonInMiles = (lat1, lon1, lat2, lon2) => {
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
  if (arr.length === 0) return acc;
  const postCodesDetails = await fetchA(arr.splice(0, 100));
  acc.push(...postCodesDetails.data.result);
  return tmpNumb > 1 ? splitArrays(arr, tmpNumb, acc) : acc;
};

async function getDistance(patientTrials, patientPostcode) {
  // looping over trail
  // receive matchedTrials =>>>patientTrials
  const pateintLocation = await fetchA([patientPostcode]);
  if (!pateintLocation.data.result[0].result) {
    return patientTrials.data.map(trail => {
      trail.Locations = trail.Locations.splice(0, 5);
      return trail;
    });
  }
  const c = patientTrials.data.map(async trial => {
    const { Locations } = trial;
    // looping over locations of every trail
    const trialPostcodes = Locations.map(obj => {
      const {
        Facility: {
          Address: { Zip },
        },
      } = obj;
      return Zip;
    });

    let fetchedPostCodes = [];
    if (trialPostcodes.length >= 100) {
      fetchedPostCodes = await splitArrays([
        patientPostcode,
        ...trialPostcodes,
      ]);
    } else {
      fetchedPostCodes = (await fetchA([patientPostcode, ...trialPostcodes]))
        .data.result;
    }

    // remove patient location from the array
    const pateintLocation = fetchedPostCodes.shift();

    fetchedPostCodes.forEach(({ query, result }, index) => {
      if (result === null) {
        return;
      }
      const { longitude, latitude } = result;
      const trailsDistance = {};
      const distance = getDistanceFromLatLonInMiles(
        +pateintLocation.result.latitude,
        +pateintLocation.result.longitude,
        +latitude,
        +longitude
      );
      trailsDistance[query] = distance;

      // the post-codes should be the same length as the locations
      // so no need for a new loop
      const CurrentLocation = Locations[index];
      const {
        Facility: {
          Address: { Zip },
        },
      } = CurrentLocation;
      CurrentLocation.Facility.Address.distance = trailsDistance[Zip];
    });
    trial.Locations = Locations.filter(obj => {
      return obj.Facility.Address.distance;
    })
      .sort((a, b) => {
        return +a.Facility.Address.distance - +b.Facility.Address.distance;
      })
      .splice(0, 5);
  });

  return Promise.all(c);
}

// leave handling the error to the UI
export const getFilteredData = async patientsInfo => {
  const formatedPatients = [];
  // get json file filtered for recuriting and unknown from github
  const trialsArr = await getTrials();
  const clonedPatientInfo = cloneDeep(patientsInfo);
  const patientCloned = await Promise.all(
    clonedPatientInfo.map(async patient => {
      // fiter the data basic on the criteria
      const matchedTrials = filterByAllCriteria(trialsArr, patient);
      /**
       *
       *
       * WE SHOULD PASS THE PATIENT POSTCODE
       *
       * AND SORT FOR  ONLY 5 LOCATIONS
       */
      await getDistance(matchedTrials, patient.zip);

      formatedPatients.push(...reformatShape(patient, matchedTrials));
      // eslint-disable-next-line no-param-reassign
      patient.matchedTrials = matchedTrials;
      return patient;
    })
  );
  return {
    filteredPatientsInfo: patientCloned,
    formatedPatients,
  };
};
