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

export const displayInclusionOrExclusion = trial => {
  const { Inclusion, Exclusion, Matched } = trial.Eligibility;
  if (!Matched) {
    return {
      ECOGStatus:
        Exclusion['ECOG status'] === ''
          ? 'No data'
          : `excluding ${Exclusion['ECOG status']}`,
      Gleason:
        Exclusion.Gleason === '' ? 'No data' : `excluding ${Exclusion.Gleason}`,
      DiseaseWithinProstate:
        Exclusion.DiseaseWithinProstate === null
          ? 'No data'
          : `excluding ${Exclusion.DiseaseWithinProstate}`,
      DiseaseOutsideProstate:
        Exclusion.DiseaseOutsideProstate === null
          ? 'No data'
          : `excluding ${Exclusion.DiseaseOutsideProstate}`,
    };
  }
  return {
    ECOGStatus:
      Inclusion['ECOG status'] === '' ? 'No data' : Inclusion['ECOG status'],
    Gleason: Inclusion.Gleason === '' ? 'No data' : Inclusion.Gleason,
    DiseaseWithinProstate:
      Inclusion.DiseaseWithinProstate === null
        ? 'No data'
        : `${Inclusion.DiseaseWithinProstate}`,
    DiseaseOutsideProstate:
      Inclusion.DiseaseOutsideProstate === null
        ? 'No data'
        : `${Inclusion.DiseaseOutsideProstate}`,
  };
};
