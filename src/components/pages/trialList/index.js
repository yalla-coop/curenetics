import React from 'react';
import ResultDetails from './ResultDetails'

import { Header, Container } from '../../common/Layout';
import { Title } from '../../common/Typography';


const TrialList = () => (
  <>

    <Header>
      <Title>Matched Trials for Patient</Title>
    </Header>

    <Container>
      <ResultDetails />
    </Container>

  </>
);

export default TrialList
;