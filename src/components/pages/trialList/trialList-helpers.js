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
  const clonedTrials = cloneDeep(matchedTrials);
  const { matchedTrials: trials, ...patientInfo } = patient;
  return clonedTrials.data.map(trial => {
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
export const getFilteredData = async patientsInfo => {
  const formatedPatients = [];
  const trialsArr = await getTrials();

  patientsInfo.forEach(patient => {
    const matchedTrials = filterByAllCriteria(trialsArr, patient);
    formatedPatients.push(...reformatShape(patient, matchedTrials));
    // eslint-disable-next-line no-param-reassign
    patient.matchedTrials = matchedTrials;
  });

  return {
    patientsInfo,
    formatedPatients,
    // trialsArr, //if needed
  };
};
