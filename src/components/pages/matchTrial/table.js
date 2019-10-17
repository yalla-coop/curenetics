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

const Table = ({
  matchingInfo: { trialCriteria = {}, patientCriteria = {} },
}) => {
  console.log('trialCriteria', trialCriteria);
  const { IsSmall } = useIsSmall();
  if (IsSmall) {
    return (
      <TableWrapper>
        <TableHeadColor />
        <TableBody>
          <TableHeaderText>Matching criteria</TableHeaderText>
          <TableRowHead>
            <span>Trial</span>
            <span>Patient</span>
          </TableRowHead>
          <TableRow>
            <span>Age: {trialCriteria.age}</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>Condition: {trialCriteria.conditons.map(i => `${i}, `)}</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>Gender: {trialCriteria.gender}</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>ECOG status: {trialCriteria.ecog} </span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>Gleason score: {trialCriteria.gleason}</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>prostate: {trialCriteria.inProstate ? 'yes' : 'no'}</span>
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
      <TableHeadColor></TableHeadColor>
      <TableBody>
        <TableHeaderText>Matching criteria</TableHeaderText>
        <TableRowHead>
          <span>Trial criteria</span>
          <span>Patient details</span>
        </TableRowHead>
        <TableRow>
          <span>Age: {trialCriteria.age}</span>
          <span>Age: {patientCriteria.age}</span>
        </TableRow>
        <TableRow>
          <span>Condition: {trialCriteria.conditons.map(i => `${i}, `)}</span>
          <span>
            Condition: {patientCriteria.conditons.map(i => `${i}, `)}{' '}
          </span>
        </TableRow>
        <TableRow>
          <span>Gender: {trialCriteria.gender}</span>
          <span>Gender: {patientCriteria.gender}</span>
        </TableRow>
        <TableRow>
          <span>ECOG status: {trialCriteria.ecog} </span>
          <span>ECOG status: {patientCriteria.ecog}</span>
        </TableRow>
        <TableRow>
          <span>Gleason score: {trialCriteria.gleason}</span>
          <span>Gleason score: {patientCriteria.gleason}</span>
        </TableRow>
        <TableRow>
          <span>
            Disease within prostate: {trialCriteria.inProstate ? 'yes' : 'no'}
          </span>
          <span>
            Disease within prostate: {patientCriteria.inProstate ? 'yes' : 'no'}
          </span>
        </TableRow>
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
