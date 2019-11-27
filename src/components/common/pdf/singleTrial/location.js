import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from '../pdfStyles';
import { icons } from '../pdfIcons';

const {
  boldText,
  columnContainer,
  text,
  rowContainer,
  markerIconStyle,
} = styles;

const { markerIcon } = icons;

const Location = ({ trialInfo }) => {
  // console.log('ttttt', trialInfo);
  return (
    <View style={[columnContainer, { marginTop: 40 }]}>
      <Text style={boldText}>Trial Location(s):</Text>
      {trialInfo.Locations.map(location => {
        const {
          Facility: {
            Name,
            Address: { City, Zip, distance },
          },
        } = location;
        console.log('add', City, distance);
        return (
          <View style={rowContainer} key={Date.now() / Math.random()}>
            <Image style={markerIconStyle} src={markerIcon} />
            <View style={rowContainer}>
              <Text style={[text, { lineHeight: 0.5 }]}>{Name}, </Text>
              <Text style={[text, { lineHeight: 0.5 }]}>{distance}</Text>
              <Text style={[text, { lineHeight: 0.5 }]}>
                {/* {'N/A////////////'} */}
                {(distance || 'N/A', City, Zip)}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Location;
