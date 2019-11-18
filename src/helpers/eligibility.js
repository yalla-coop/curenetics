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
          ? 'N/A'
          : `excluding ${Exclusion['ECOG status']}`,
      Gleason:
        Exclusion.Gleason === '' ? 'N/A' : `excluding ${Exclusion.Gleason}`,
      DiseaseWithinProstate:
        Exclusion.DiseaseWithinProstate === null
          ? 'N/A'
          : `excluding ${Exclusion.DiseaseWithinProstate}`,
      DiseaseOutsideProstate:
        Exclusion.DiseaseOutsideProstate === null
          ? 'N/A'
          : `excluding ${Exclusion.DiseaseOutsideProstate}`,
    };
  }
  return {
    ECOGStatus:
      Inclusion['ECOG status'] === '' ? 'N/A' : Inclusion['ECOG status'],
    Gleason: Inclusion.Gleason === '' ? 'N/A' : Inclusion.Gleason,
    DiseaseWithinProstate:
      Inclusion.DiseaseWithinProstate === null
        ? 'N/A'
        : `${Inclusion.DiseaseWithinProstate}`,
    DiseaseOutsideProstate:
      Inclusion.DiseaseOutsideProstate === null
        ? 'N/A'
        : `${Inclusion.DiseaseOutsideProstate}`,
  };
};
