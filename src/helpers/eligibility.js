import cloneDeep from 'clone-deep';
import { ADULT_MIN_AGE } from '../constants/filter-criteria';

// isPotential determines green or orange colour
export const isPotential = trial => {
  const { ageNearlyEligible = false, ECOGNearlyEligible = false } = trial;
  return ageNearlyEligible === false && ECOGNearlyEligible === false;
};

export const filterByEligibility = trials => {
  return cloneDeep(trials).sort((a, b) => {
    if (isPotential(a) === isPotential(b)) {
      return 0;
    }
    if (isPotential(a)) {
      return -1;
    }
    return 1;
  });
};

export const getAgeNum = age =>
  age !== 'N/A' ? +age.split(' ')[0] : ADULT_MIN_AGE;
