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

const Location = ({ trialInfo }) => (
  <View style={[columnContainer, { marginTop: 40 }]}>
    <Text style={boldText}>Trial Location(s):</Text>
    {trialInfo.locations.map(item => {
      return (
        <View style={rowContainer} key={item.name}>
          <Image style={markerIconStyle} src={markerIcon} />
          <View style={rowContainer}>
            <Text style={[text, { lineHeight: 0.5 }]}>{item.name}, </Text>
            <Text style={[text, { lineHeight: 0.5 }]}>{item.address}</Text>
          </View>
        </View>
      )
    })}
  </View>
);
export default Location;
