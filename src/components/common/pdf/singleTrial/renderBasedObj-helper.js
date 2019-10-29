import {
  getAgeNum,
  displayInclusionOrExclusion,
} from '../../../../helpers/eligibility';

const renderBasedOnObject = (item, index, trialPatientData) => {
  if (index === 0) {
    const InclusionOrExclusion = displayInclusionOrExclusion(item);
    return {
      age: `${getAgeNum(item.MinAge)} - ${getAgeNum(item.MaxAge)}`,
      conditons: item.Conditions.map(condition => `${condition},`),
      gender: item.Gender,
      ecog: InclusionOrExclusion.ECOGStatus,
      gleason: InclusionOrExclusion.Gleason,
      DiseaseWithinProstate: InclusionOrExclusion.DiseaseWithinProstate,
      DiseaseOutsideProstate: InclusionOrExclusion.DiseaseOutsideProstate,
    };
  }
  return {
    age: trialPatientData[0].ageNearlyEligible ? `${item.age}*` : item.age,
    conditons: item.cancerType,
    gender: item.gender,
    ecog: trialPatientData[0].ECOGNearlyEligible
      ? `${item.ECOGStatus}*`
      : item.ECOGStatus,
    gleason: item.gleasonScore,
    DiseaseWithinProstate: item['Disease within prostate'],
    DiseaseOutsideProstate: item['Disease outside prostate'],
  };
};

export default renderBasedOnObject;
