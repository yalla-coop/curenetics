import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../pdfStyles';

import { colors } from '../../../../styles/globalStyles';
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
      ecog: InclusionOrExclusion.ECOGStatus, // this need more work
      gleason: InclusionOrExclusion.Gleason, // this also,
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

const MatchTable = ({ trialPatientData, isPotential }) => {
  const {
    text,
    matchTable,
    topBorder,
    title,
    titleText,
    subtitles,
    subtitleTrial,
    subtitlePatient,
    tableContent,
    trialColumn,
    patientColumn,
  } = styles;
  const headerStyle = {
    ...topBorder,
    backgroundColor: isPotential ? colors.confirm : colors.accent,
  };

  return (
    <View style={matchTable}>
      <View style={headerStyle} />
      <View style={title}>
        <Text style={titleText}>Matching Criteria</Text>
      </View>
      <View style={subtitles}>
        <Text style={subtitleTrial}>Trial criteria</Text>
        <Text style={subtitlePatient}>Patient details</Text>
      </View>

      <View style={tableContent}>
        {trialPatientData.map((item, index) => {
          const {
            age,
            conditons,
            gender,
            ecog,
            gleason,
            DiseaseWithinProstate,
            DiseaseOutsideProstate,
          } = renderBasedOnObject(item, index, trialPatientData);
          return (
            <View
              key={Date.now() / Math.random()}
              style={index === 0 ? trialColumn : patientColumn}
            >
              <Text style={text}>Age: {age}</Text>
              <Text style={text}>Conditons: {conditons}</Text>
              <Text style={text}>Gender: {gender}</Text>
              <Text style={text}>ECOG: {ecog}</Text>
              <Text style={text}>Gleason Score: {gleason}</Text>
              <Text style={text}>
                Disease within Prostate: {DiseaseWithinProstate}
              </Text>
              <Text style={text}>
                Disease outside Prostate: {DiseaseOutsideProstate}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MatchTable;
