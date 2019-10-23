import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../pdfStyles';

import { colors } from '../../../../styles/globalStyles';

const renderBasedOnObject = (item, index) => {
  if (index === 0) {
    const minAgeNum = item.MinAge !== 'N/A' ? item.MinAge.split(' ')[0] : 18;
    const maxAgeNum = item.MaxAge.split(' ')[0];
    return {
      age: `${minAgeNum} - ${maxAgeNum}`,
      conditons: item.Conditions.map(condition => `${condition},`),
      gender: item.Gender,
      ecog: item.Eligibility.Inclusion['ECOG status'], // this need more work
      gleason: item.Eligibility.Inclusion.Gleason, // this also,
      inProstate: item.Eligibility.Inclusion.DiseaseWithinProstate,
    };
  }
  return {
    age: item.age,
    conditons: item.canerType,
    gender: item.gender,
    ecog: item.ECOGStatus,
    gleason: item.gleasonScore,
    inProstate: item['Disease within prostate'],
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
          // console.log('item==>', index);
          const {
            age,
            conditons,
            gender,
            ecog,
            gleason,
            inProstate,
          } = renderBasedOnObject(item, index);
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
                Disease within Prostate: {inProstate ? 'yes' : 'no'}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MatchTable;
