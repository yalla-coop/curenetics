import React from 'react';

import { Header } from '../../common/Layout';
import { CustomButton } from '../../common/Buttons';
import { Title, Paragraph } from '../../common/Typography';
import ExportLink from '../../common/icons/ExportLink.jsx';

const TrialDetailHeader = () => (
  <>
    <Header>
      <Title>Patient and clinical trial matches index</Title>

      <Paragraph textAlign="left">
        Below find a list of matching clinical trials. Eligibility for clinical trials are currently
        based on age, gender, cancer type, ECOG status, Gleason level and certain diseases
        within and outside the prostate.
      </Paragraph>
      <Paragraph textAlign="left">
        To export the details of all eligible trials,
        click the <strong>Export Results</strong> button below.
      </Paragraph>
    </Header>

    <CustomButton>
      <ExportLink margin="0 8px" />
      Export Results
    </CustomButton>
  </>
);

export default TrialDetailHeader;
