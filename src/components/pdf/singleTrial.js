import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from '@react-pdf/renderer';
import calendarImg from '../../assets/calendarImg.png';

Font.register({
  family: 'Lato',
  source: '',
  fontStyle: 'normal',
  fontWeight: 'light',
});

const styles = StyleSheet.create({
  page: {
    padding: 50,
  },
  table: {
    display: 'flex',
    height: 300,
    width: 432,
    border: 1,
    borderRadius: 3,
  },
  border: {
    width: 430,
    height: 10,
    backgroundColor: '#58b773',
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
  },
  title: {
    display: 'flex',
    width: 430,
    height: 40,
    alignItems: 'center',
  },
  name: {
    display: 'flex',
    width: 215,
  },
});

const SinglePage = ({ sDate, fDate }) => (
  <Document>
    <Page style={styles.page}>
      <View>
        {/* <Image src={{ uri: calendarImg, method: 'GET' }} /> */}
        <Text>Starting Date:{sDate}</Text>
        <Text>Finish Date:{fDate}</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.border}></View>
        <View style={styles.title}>
          <Text>Matching Criteria</Text>
        </View>
        {/* subtitles */}
        <View style={{display:'flex', flexDirection: 'row', borderBottom: 0.5}}>
          <Text style={[styles.name, { alignItems: 'left' }]}>
            Trial Criteria
          </Text>
          <Text>Patient Criteria</Text>
        </View>
        {/* box items */}
        <View>
        <Text>Age:</Text>
        <Text>Gender:</Text>
        <Text>ECOG:</Text>
        <Text>Gleason Score:</Text>
        <Text>Disease within Prostate:</Text>
        </View>
      </View>
    </Page>
  </Document>
);
export default SinglePage;
