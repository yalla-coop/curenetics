import React from 'react';
import MatchHeader from './matchHeader';
import MatchTable from './matchTable';
import Location from './location';

const SingleTrialPdf = ({ data, isPotential = null }) => {
  const { trialInfo, matchingInfo } = data;

  const trialPatient = [
    matchingInfo.trialCriteria,
    matchingInfo.patientCriteria,
  ];

  return (
    <>
      <MatchHeader trialInfo={trialInfo} />
      <MatchTable trialPatientData={trialPatient} isPotential={isPotential} />
      <Location trialInfo={trialInfo} />
    </>
  );
};
export default SingleTrialPdf;
