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
    nct,
    title,
    startingDate,
    endingDate,
    phase,
    overallStatus,
    enrolled,
    interventions,
    sponsors,
    allocation,
  } = trialInfo;

  return (
    <View style={matchTopContainer}>
      <View style={rowContainer}>
        <Text style={nctText}>NCT Number: </Text>
        <Text style={text}>{nct}</Text>
      </View>
      <Text style={boldText}>{title}</Text>

      <View style={rowContainer}>
        <Image style={icon} src={calendarIcon} />
        <View style={columnContainer}>
          <Text style={text}>Starting Date: {startingDate}</Text>
          <Text style={text}>Finish Date: {endingDate}</Text>
        </View>
      </View>

      <View style={rowContainer}>
        <View style={rowContainer}>
          <Image style={icon} src={phaseIcon} />
          <Text style={text}>Phase: {phase}</Text>
        </View>
        <View style={rowContainer}>
          <Image style={icon} src={tickIcon} />
          <Text style={text}>Recruiting: {overallStatus}</Text>
        </View>
        <View style={rowContainer}>
          <Image style={icon} src={avatarIcon} />
          <Text style={text}>Enrolled: {enrolled}</Text>
        </View>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={testTubeIcon} />
        <Text style={text}>
          Interventions: {interventions.map(i => `${i}, `)}
        </Text>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={plusIcon} />
        <Text style={text}>Sponsors: {sponsors.map(i => `${i}, `)}</Text>
      </View>

      <View style={rowContainer}>
        <Image style={icon} src={stethiscopeIcon} />
        <Text style={text}>Allocation: {allocation}</Text>
      </View>
    </View>
  );
};

export default MatchHeader;
