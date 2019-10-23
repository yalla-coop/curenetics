import React from 'react';
import Tick from '../../common/icons/Tick';
import useIsSmall from '../../common/useIsSmall';

import {
  TableWrapper,
  TableBody,
  TableHeadColor,
  TableRowHead,
  TableRow,
  TableHeaderText,
} from './style';

const Table = ({ trial, patientsInfo, isPotential }) => {
  const {
    Conditions,
    MinAge,
    MaxAge,
    Gender,
    Eligibility: { Inclusion },
    ageNearlyEligible = false,
    ECOGNearlyEligible = false,
  } = trial;

  const {
    'Disease within prostate': DiseaseWithinProstate,
    ECOGStatus,
    gleasonScore,
    age,
    gender,
    cancerType,
  } = patientsInfo;

  const minAgeNum = MinAge !== 'N/A' ? +MinAge.split(' ')[0] : 18;
  const maxAgeNum = MaxAge.split(' ')[0];

  const { IsSmall } = useIsSmall();
  if (IsSmall) {
    return (
      <TableWrapper>
        <TableHeadColor isPotential={isPotential} />
        <TableBody>
          <TableHeaderText>Matching criteria</TableHeaderText>
          <TableRowHead>
            <span>Trial</span>
            <span>Patient</span>
          </TableRowHead>
          <TableRow>
            <span>
              Age: {minAgeNum}-{maxAgeNum}
            </span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>
              Condition: {Conditions.map(condition => `${condition}, `)}
            </span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>Gender: {Gender}</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>ECOG status: {Inclusion['ECOG status']} </span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>Gleason score: {Inclusion.Gleason}</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>
              prostate: {Inclusion.DiseaseWithinProstate ? 'yes' : 'no'}
            </span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
        </TableBody>
      </TableWrapper>
    );
  }
  return (
    <TableWrapper>
      <TableHeadColor isPotential={isPotential} />
      <TableBody>
        <TableHeaderText>Matching criteria</TableHeaderText>
        <TableRowHead>
          <span>Trial criteria</span>
          <span>Patient details</span>
        </TableRowHead>
        <TableRow>
          <span>
            Age: {minAgeNum}-{maxAgeNum}
          </span>
          <span>Age: {ageNearlyEligible ? `${age}*` : age}</span>
        </TableRow>
        <TableRow>
          <span>Condition: {Conditions.map(i => `${i}, `)}</span>
          <span>Condition: {cancerType} </span>
        </TableRow>
        <TableRow>
          <span>Gender: {Gender}</span>
          <span>Gender: {gender}</span>
        </TableRow>
        <TableRow>
          <span>ECOG status: {Inclusion['ECOG status']} </span>
          <span>
            ECOG status: {ECOGNearlyEligible ? `${ECOGStatus}*` : ECOGStatus}
          </span>
        </TableRow>
        <TableRow>
          <span>Gleason score: {Inclusion.Gleason}</span>
          <span>Gleason score: {gleasonScore}</span>
        </TableRow>
        <TableRow>
          <span>
            Disease within prostate:{' '}
            {Inclusion.DiseaseWithinProstate ? 'yes' : 'no'}
          </span>
          <span>
            Disease within prostate: {DiseaseWithinProstate ? 'yes' : 'no'}
          </span>
        </TableRow>
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
