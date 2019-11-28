import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import { styles } from './pdfStyles';
import { isPotential, filterByEligibility } from '../../../helpers/eligibility';
import SingleTrial from './singleTrial';

class PdfTemplate extends React.PureComponent {
  render() {
    const { data, patientsInfo, type = 'single' } = this.props;
    const documentTitle =
      type === 'single' ? 'Single Trial Match' : 'Multiple Trial Match';

    return (
      <Document title={documentTitle} creator="Curenetics Clinical Trials">
        <>
          {filterByEligibility(data).map(trial => (
            <Page style={styles.page} key={Date.now() / Math.random()}>
              <SingleTrial
                data={trial}
                patientsInfo={!patientsInfo ? trial.patientInfo : patientsInfo}
                isPotential={isPotential(trial)}
              />
            </Page>
          ))}
        </>
      </Document>
    );
  }
}
export default PdfTemplate;
