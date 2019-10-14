import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { styles } from '../pdfStyles';

const Location = ({ trialInfo }) => {
  const { boldText, columnContainer, text, rowContainer } = styles;
  return (
    <View style={[columnContainer, { marginTop: 40 }]}>
      <Text style={boldText}>Trial Location(s):</Text>
      {trialInfo.locations.map(item => {
        return (
          <View style={rowContainer}>
            <Text style={[text, { lineHeight: 0.5 }]}>{item.name}</Text>
            <Text style={[text, { paddingLeft: 8, lineHeight: 0.5 }]}>
              {item.address}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
export default Location;
