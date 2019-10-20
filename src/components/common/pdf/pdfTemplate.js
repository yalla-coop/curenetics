import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import { styles } from './pdfStyles';

// import Roboto from '../fonts/Roboto-Regular.ttf';
// import RobotoBold from '../fonts/Roboto-Bold.ttf';

// import templates for single trial and mulitple trials here:
import SingleTrial from './singleTrial';

// Font.register({
//   family: 'Roboto',
//   src: Roboto,
// });

// Font.register({
//   family: 'Roboto-bold',
//   src: RobotoBold,
// });

// data = result data
// isPotential = green or orange colour
// type = the type of pdf template to use. Single trial by default

const PdfTemplate = ({ data, isPotential = null, type = 'single' }) => {
  const documentTitle =
    type === 'single' ? 'Single Trial Match' : 'Multiple Trial Match';
    // console.log("data => ", data);
  return (
    <Document title={documentTitle} creator="Curenetics Clinical Trials">
      <>
      {data.map((item) => {
        // console.log("item", item.trialInfo)
        return(
          <Page style={styles.page}>
              <SingleTrial data={item} isPotential={item.eligibilityStatus} />
          </Page>
        )
      })}
      </>
    </Document>
  );
};
export default PdfTemplate;
