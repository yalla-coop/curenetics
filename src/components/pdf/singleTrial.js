import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

Font.register({
  family: 'Lato',
  scr: 'https://fonts.googleapis.com/css?family=Lato:300&display=swap',
  fontStyle: 'normal',
  fontWeight: 'light',
});

const SinglePage = () => (
  <Document>
    <Page>
      <View>
        <Text>yes</Text>
      </View>
    </Page>
  </Document>
);
export default SinglePage;
