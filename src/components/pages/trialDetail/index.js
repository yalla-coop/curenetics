import React from 'react';
import TrialDetailHeader from './TrialDetailHeader';
import CardDetails from './CardDetails';

// this is going to be a class component
// the data is placeholder for the state
const TrialDetail = () => (
  <>
    <TrialDetailHeader />
    <CardDetails data={[1, 2, 3]} />
  </>
);

export default TrialDetail;
