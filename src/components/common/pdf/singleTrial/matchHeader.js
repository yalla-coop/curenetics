import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from '../pdfStyles';
import { icons } from '../pdfIcons';

const {
  text,
  boldText,
  icon,
  matchTopContainer,
  rowContainer,
  columnContainer,
  nctText,
} = styles;

const {
  calendarIcon,
  phaseIcon,
  tickIcon,
  avatarIcon,
  testTubeIcon,
  plusIcon,
  stethiscopeIcon,
} = icons;

const MatchHeader = ({ trialInfo }) => {
  const {
    Phase,
    OverallStatus,
    IDInfo: { NCTID, Title },
  } = trialInfo;

  return (
    <View style={matchTopContainer}>
      <View style={rowContainer}>
        <Text style={nctText}>NCT Number: </Text>
        <Text style={text}>{NCTID}</Text>
      </View>
      <Text style={boldText}>{Title}</Text>

      <View style={rowContainer}>
        <Image style={icon} src={calendarIcon} />
        <View style={columnContainer}>
          <Text style={text}>Starting Date: {'No data found'}</Text>
          <Text style={text}>Finish Date: {'No data found'}</Text>
        </View>
      </View>

      <View style={rowContainer}>
        <View style={rowContainer}>
          <Image style={icon} src={phaseIcon} />
          <Text style={text}>Phase: {Phase}</Text>
        </View>
        <View style={rowContainer}>
          <Image style={icon} src={tickIcon} />
          <Text style={text}>Recruiting: {OverallStatus}</Text>
        </View>
        <View style={rowContainer}>
          <Image style={icon} src={avatarIcon} />
          <Text style={text}>Enrolled: {'No data found'}</Text>
        </View>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={testTubeIcon} />
        <Text style={text}>
          {/* Interventions: {['No data found'].map(i => `${i}, `)} */}
          Interventions: {'No data found'}
        </Text>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={plusIcon} />
        <Text style={text}>
          {/* Sponsors: {['No data found'].map(i => `${i}, `)} */}
          Sponsors: {'No data found'}
        </Text>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={stethiscopeIcon} />
        <Text style={text}>Allocation: {'No data found'}</Text>
      </View>
    </View>
  );
};

export default MatchHeader;
