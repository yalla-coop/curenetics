import React from 'react';

import { Container } from '../../common/Layout';

import TrialDetailHeader from './TrialDetailHeader';
import CardDetails from './CardDetails';

// this is going to be a class component
// the data is placeholder for the state
const TrialDetail = () => (
  <Container isCenter={true}>
    <TrialDetailHeader />
    <CardDetails data={[1, 2, 3]} />
  </Container>
);

export default TrialDetail;
