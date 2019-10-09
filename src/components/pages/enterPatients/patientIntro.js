import React from 'react';
import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';

const PatientIntro = () => (
  <Header>
    <Title>Enter patient data manually</Title>
    <Paragraph>
      Please enter the relevant medical details for each of patients below. We
      can currently match clinical trials for you based on age, gender, cancer
      type, ECOG status, Gleason level and certain diseases within and outside
      the prostate.
    </Paragraph>
  </Header>
);

export default PatientIntro;
