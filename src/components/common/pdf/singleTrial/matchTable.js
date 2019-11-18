import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../pdfStyles';
import { colors } from '../../../../styles/globalStyles';

import renderBasedOnObject from './renderBasedObj-helper';

const MatchTable = ({ trialPatientData, isPotential }) => {
  const { cancerType } = trialPatientData[1];
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
              <Text style={text}>Age: {age || 'N/A'}</Text>
              <Text style={text}>Conditons: {conditons || 'N/A'}</Text>
              <Text style={text}>Gender: {gender || 'N/A'}</Text>
              {cancerType.toLowerCase() === 'prostate cancer' && (
                <>
                  <Text style={text}>ECOG: {ecog || 'N/A'}</Text>
                  <Text style={text}>Gleason Score: {gleason || 'N/A'}</Text>
                  <Text style={text}>
                    Disease within Prostate: {DiseaseWithinProstate || 'N/A'}
                  </Text>
                  <Text style={text}>
                    Disease outside Prostate: {DiseaseOutsideProstate || 'N/A'}
                  </Text>
                </>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MatchTable;
