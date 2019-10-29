import cloneDeep from 'clone-deep';
import { acceptanceCriteria } from '../constants/filter-criteria';
import {
  cloneAndEditPatientInfo,
  isEligibilityMatched,
  checkAge,
  isGenderMatched,
  isCancerMatched,
  checkAgeEligibility,
  filterLocationsByCountry,
} from './filter-helpers';

// this is used to filterout anything but recruiting and unknown
export const filterByOverallStatus = trails => {
  const { RECRUITING, UN_KNOWN_STATUS } = acceptanceCriteria;
  return trails.filter(
    ({ OverallStatus }) =>
      OverallStatus === RECRUITING || OverallStatus === UN_KNOWN_STATUS
  );
};

// first call filterByOverallStatus then pass it's
// result as trials to this function
export const filterByAllCriteria = (trials, patientInfo) => {
  const clonedTrial = cloneDeep(trials);

  const { cancerType, gender: patientGender, age: patientAge } = patientInfo;
  const matchedTrials = clonedTrial.filter(trial => {
    const { Conditions, Gender: trialGender, MinAge, MaxAge } = trial;

    if (
      isEligibilityMatched(
        cloneAndEditPatientInfo(patientInfo),
        // patientInfo,
        trial
      ) &&
      isCancerMatched(cancerType, Conditions) &&
      isGenderMatched(trialGender, patientGender)
    ) {
      const ageConditionObj = checkAge(patientAge, MinAge, MaxAge);
      return (
        checkAgeEligibility(trial, ageConditionObj) &&
        filterLocationsByCountry(trial, acceptanceCriteria.UK)
      );
    }
    return false;
  });

  return {
    size: matchedTrials.length,
    fileReference: patientInfo.fileReference,
    data: matchedTrials,
  };
};
