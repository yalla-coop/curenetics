import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../pdfStyles';

import { colors } from '../../../../styles/globalStyles';

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
    backgroundColor: isPotential ? colors.confirm : colors.accent,
    ...topBorder,
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
        {trialPatientData.map((item, index) => (
          <View
            key={item.age}
            style={index === 0 ? trialColumn : patientColumn}
          >
            <Text style={text}>Age: {item.age}</Text>
            <Text style={text}>
              Conditons: {item.conditons.map(condition => `${condition},`)}
            </Text>
            <Text style={text}>Gender: {item.gender}</Text>
            <Text style={text}>ECOG: {item.ecog}</Text>
            <Text style={text}>Gleason Score: {item.gleason}</Text>
            <Text style={text}>
              Disease within Prostate: {item.inProstate ? 'yes' : 'no'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default MatchTable;
