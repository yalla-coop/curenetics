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

const MatchHeader = ({ trialInfo, fileReference }) => {
  const {
    Phase,
    OverallStatus,
    IDInfo: { NCTID, Title },
  } = trialInfo;

  return (
    <View style={matchTopContainer}>
      <View style={rowContainer}>
        <Text style={nctText}>File Name: </Text>
        <Text style={text}>{fileReference}</Text>
      </View>
      <View style={rowContainer}>
        <Text style={nctText}>NCT Number: </Text>
        <Text style={text}>{NCTID}</Text>
      </View>
      <Text style={boldText}>{Title}</Text>

      <View style={rowContainer}>
        <Image style={icon} src={calendarIcon} />
        <View style={columnContainer}>
          <Text style={text}>Starting Date: {'N/A'}</Text>
          <Text style={text}>Finish Date: {'N/A'}</Text>
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
          <Text style={text}>Enrolled: {'N/A'}</Text>
        </View>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={testTubeIcon} />
        <Text style={text}>
          {/* Interventions: {['N/A'].map(i => `${i}, `)} */}
          Interventions: {'N/A'}
        </Text>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={plusIcon} />
        <Text style={text}>
          {/* Sponsors: {['N/A'].map(i => `${i}, `)} */}
          Sponsors: {'N/A'}
        </Text>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={stethiscopeIcon} />
        <Text style={text}>Allocation: {'N/A'}</Text>
      </View>
    </View>
  );
};

export default MatchHeader;
