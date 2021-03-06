/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import cloneDeep from 'clone-deep';
import {
  ECOG_FIT_TOP,
  AGE_DIFF,
  EMPTY_ELIGIBILITY_AC_CRITERIA,
  acceptanceCriteria,
} from '../constants/filter-criteria';
import { getAgeNum } from './eligibility';

export const cloneAndEditPatientInfo = patientInfo => {
  const clonedPatientInfo = cloneDeep(patientInfo);

  const { gleasonScore, Keywords, ...rest } = clonedPatientInfo;

  let {
    ECOGStatus,
    'Disease outside prostate': DiseaseOutsideProstate,
    'Disease within prostate': DiseaseWithinProstate,
  } = clonedPatientInfo;

  let Gleason = '';

  if (ECOGStatus) {
    if (+ECOGStatus <= 2) {
      ECOGStatus = 'fit';
    } else {
      ECOGStatus = 'not fit';
    }
  }
  // we are not sure yet of this gleasonScore
  if (gleasonScore) {
    if (
      ['3+3', '3+4', '6 or less'].includes(gleasonScore) ||
      +gleasonScore <= 6
    ) {
      Gleason = 'low risk';
    } else if (
      ['4+3', '7 or over'].includes(gleasonScore) ||
      +gleasonScore > 7
    ) {
      Gleason = 'high risk';
    }
  }

  if (Keywords) {
    if (
      Keywords.includes('disease within prostate') ||
      Keywords.includes('focal disease')
    ) {
      DiseaseWithinProstate = true;
    } else {
      DiseaseWithinProstate = false;
    }

    if (
      Keywords.includes('disease outside prostate') ||
      Keywords.includes('metastatic disease') ||
      Keywords.includes('advanced disease')
    ) {
      DiseaseOutsideProstate = true;
    } else {
      DiseaseOutsideProstate = false;
    }
  } else {
    if (DiseaseWithinProstate) {
      if (rest['Disease within prostate'] === 'yes') {
        DiseaseWithinProstate = true;
      } else {
        DiseaseWithinProstate = false;
      }
    }
    if (DiseaseOutsideProstate) {
      if (rest['Disease outside prostate'] === 'yes') {
        DiseaseOutsideProstate = true;
      } else {
        DiseaseOutsideProstate = false;
      }
    }
  }

  return {
    ...rest,
    'ECOG status': ECOGStatus,
    Gleason,
    DiseaseWithinProstate,
    DiseaseOutsideProstate,
  };
};

const isTheTwoEligibilityTheSame = (
  formatedPatientInfo,
  trialEligibility,
  trial
) => {
  // check for ECOG Threshold
  // if patient ECOG higher than the trail by 1 then
  // it is nearly match
  let ECOGThreshold = null;
  if (formatedPatientInfo.ECOGStatus) {
    ECOGThreshold = +formatedPatientInfo.ECOGStatus - ECOG_FIT_TOP;
  }

  for (const key in trialEligibility) {
    if (formatedPatientInfo[key]) {
      if (
        trialEligibility[key] !== formatedPatientInfo[key] &&
        trialEligibility[key] !== EMPTY_ELIGIBILITY_AC_CRITERIA[key]
      ) {
        if (
          trialEligibility[key] === 'ECOG status' &&
          (ECOGThreshold > 0 && ECOGThreshold <= 1)
        ) {
          // add value nearly eligible
          trial.ECOGNearlyEligible = true;
          return true;
        }
        return false;
      }
    }
  }
  return true;
};

const isEligibilityWithNoDetails = InclusionOrExclusion => {
  for (const key in InclusionOrExclusion) {
    if (!['', null].includes(InclusionOrExclusion[key])) {
      return false;
    }
  }
  return true;
};

// need to do some refactor later
export const isEligibilityMatched = (formatedPatientInfo, trial) => {
  const { Inclusion, Exclusion } = trial.Eligibility;
  if (isEligibilityWithNoDetails(Inclusion)) {
    if (isEligibilityWithNoDetails(Exclusion)) {
      /* 
        this is used to decide what to display
        on the screen
        1- Matched=Any then it's OK to display
        inclusion or exclusion
        2-Matched=Inclusion then display inclusion
        3-no Matched then display exclusion
       */
      trial.Eligibility.Matched = 'Any';
      return true;
    }
    return isTheTwoEligibilityTheSame(formatedPatientInfo, Exclusion, trial);
  }

  if (isTheTwoEligibilityTheSame(formatedPatientInfo, Inclusion, trial)) {
    trial.Eligibility.Matched = 'Inclusion';
    return true;
  }
  return false;
};

export const checkAge = (patientAge, trialMinAge, trialMaxAge) => {
  const minAge = getAgeNum(trialMinAge);
  const maxAge = getAgeNum(trialMaxAge);
  const pAge = +patientAge;

  // if the user doesn't provide age then
  // consider it as matching with the criteria

  if (!patientAge || (pAge >= minAge && pAge <= maxAge)) {
    return { ageInRange: true, ageNearly: false };
  }
  if (pAge > maxAge && Math.abs(pAge - maxAge) <= AGE_DIFF) {
    return { ageInRange: false, ageNearly: true };
  }
  return { ageInRange: false, ageNearly: false };
};

export const checkAgeEligibility = (trial, { ageInRange, ageNearly }) => {
  if (ageInRange === false && ageNearly === false) {
    return false;
  }
  if (ageInRange === false && ageNearly === true) {
    // add age nearly to the trial object
    trial.ageNearlyEligible = true;
    return true;
  }
  return true;
};

export const isGenderMatched = (trialGender, patientGender) => {
  if (patientGender) {
    return (
      trialGender === 'All' ||
      trialGender.toLowerCase() === patientGender.toLowerCase()
    );
  }
  return true;
};

export const isCancerMatched = (patientCancer, trialConditions) => {
  if (!patientCancer) return true;
  return trialConditions.some(cancerType =>
    cancerType.toLowerCase().includes(patientCancer.toLowerCase())
  );
};

const hasContactDetails = contact => {
  // at least one record should have some info
  for (const value of Object.values(contact)) {
    if (value !== '') return true;
  }
  return false;
};

const hasContactOrName = (contact, name) => {
  return name !== '' || hasContactDetails(contact);
};

export const filterLocationsByCountry = (trial, country) => {
  const { RECRUITING } = acceptanceCriteria;
  const { Locations } = trial;
  trial.Locations =
    Locations &&
    Locations.filter(({ Contact, Facility: { Address, Name }, Status }) => {
      return (
        Status === RECRUITING &&
        Address.Country === country &&
        hasContactOrName(Contact, Name)
      );
    });
  return trial.Locations.length > 0;
};
