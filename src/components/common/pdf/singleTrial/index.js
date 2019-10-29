import React from 'react';
import MatchHeader from './matchHeader';
import MatchTable from './matchTable';
import Location from './location';

const SingleTrialPdf = ({ data, patientsInfo, isPotential }) => {
  const trialPatient = [data, patientsInfo];

  return (
    <>
      <MatchHeader
        trialInfo={data}
        fileReference={patientsInfo.fileReference}
      />
      <MatchTable trialPatientData={trialPatient} isPotential={isPotential} />
      <Location trialInfo={data} />
    </>
  );
};
export default SingleTrialPdf;
