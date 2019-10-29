import React from 'react';

import { Container } from '../../common/Layout';
import { MatchButton } from './style';

const PatientMatchButton = ({ onClick }) => (
  <Container>
    <MatchButton onClick={onClick} isCenter aria-label="Match Clinical Trials">
      Match Clinical Trials
    </MatchButton>
  </Container>
);

export default PatientMatchButton;
