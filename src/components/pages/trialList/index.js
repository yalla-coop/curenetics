import React, { Fragment } from 'react';
import ResultDetails from './ResultDetails'

import { Header, Container } from '../../common/Layout';
import { Title } from '../../common/Typography';


const TrialList = () => (
  <Fragment>

    <Header>
      <Title>Matched Trials for Patient</Title>
    </Header>

    <Container>
      <ResultDetails />
    </Container>

  </Fragment>
);

export default TrialList
;