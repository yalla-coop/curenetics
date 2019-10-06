import React from 'react';

import { Container } from '../../common/Layout';
import { MatchButton } from './style';

const PatientIntro = () => (
  <Container>
    <MatchButton isCenter aria-label="Match Clinical Trials">
      Match Clinical Trials
    </MatchButton>
  </Container>
);

export default PatientIntro;
