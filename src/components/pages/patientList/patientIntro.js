import React from 'react';

import PatientMatchButton from './PatientMatchButton';
import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';

const PatientIntro = ({ onClick }) => (
  <Header>
    <Title>Edit patient data</Title>
    <Paragraph>
      Your key data has been analysed and returned to identify the key medical
      criteria to help filter clinical trials. We can currently match clinical
      trials for you based on age, gender, cancer type and specific medical
      terms for each condition.
    </Paragraph>
    <Paragraph>
      Please check below and select edit to change any data that is incorrect.
      When you’re ready select Find Clinical Trials
    </Paragraph>
    <PatientMatchButton onClick={onClick} />
  </Header>
);

export default PatientIntro;
