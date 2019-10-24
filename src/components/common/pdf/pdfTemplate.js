import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import { styles } from './pdfStyles';
import { isPotential, filterByEligibility } from '../../../helpers/eligibility';
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

const PdfTemplate = ({ data, patientsInfo, type = 'single' }) => {
  const documentTitle =
    type === 'single' ? 'Single Trial Match' : 'Multiple Trial Match';

  return (
    <Document title={documentTitle} creator="Curenetics Clinical Trials">
      <>
        {filterByEligibility(data).map(trial => (
          <Page style={styles.page} key={Date.now() / Math.random()}>
            <SingleTrial
              data={trial}
              patientsInfo={patientsInfo}
              isPotential={isPotential(trial)}
            />
          </Page>
        ))}
      </>
    </Document>
  );
};
export default PdfTemplate;
