/* eslint-disable no-nested-ternary */
import React from 'react';
import Tick from '../../common/icons/Tick';
import useIsSmall from '../../common/useIsSmall';
import {
  isPotential,
  getAgeNum,
  displayInclusionOrExclusion,
} from '../../../helpers/eligibility';

import {
  TableWrapper,
  TableBody,
  TableHeadColor,
  TableRowHead,
  TableRow,
  TableHeaderText,
} from './style';

const Table = ({ trial, patientsInfo }) => {
  const {
    Conditions,
    MinAge,
    MaxAge,
    Gender,
    ageNearlyEligible = false,
    ECOGNearlyEligible = false,
  } = trial;

  const {
    'Disease within prostate': DiseaseWithinProstate,
    'Disease outside prostate': DiseaseOutsideProstate,
    ECOGStatus,
    gleasonScore,
    age,
    gender,
    cancerType,
  } = patientsInfo;

  const minAgeNum = getAgeNum(MinAge);
  const maxAgeNum = getAgeNum(MaxAge);

  const isPotentialRes = isPotential(trial);
  const InclusionOrExclusion = displayInclusionOrExclusion(trial);

  const { IsSmall } = useIsSmall();
  if (IsSmall) {
    return (
      <TableWrapper>
        <TableHeadColor isPotential={isPotentialRes} />
        <TableBody>
          <TableHeaderText>Matching criteria</TableHeaderText>
          <TableRowHead>
            <span>Trial</span>
            <span>Patient</span>
          </TableRowHead>
          <TableRow>
            <span>
              Age: {minAgeNum} - {maxAgeNum}
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
          {cancerType.toLowerCase() === 'prostate cancer' && (
            <>
              <TableRow>
                <span>ECOG status: {InclusionOrExclusion.ECOGStatus}</span>
                <span>
                  <Tick></Tick>
                </span>
              </TableRow>
              <TableRow>
                <span>Gleason score: {InclusionOrExclusion.Gleason}</span>
                <span>
                  <Tick></Tick>
                </span>
              </TableRow>
              <TableRow>
                <span>
                  Disease within prostate:{' '}
                  {InclusionOrExclusion.DiseaseWithinProstate}
                </span>
                <span>
                  <Tick></Tick>
                </span>
              </TableRow>
              <TableRow>
                <span>
                  Disease outside prostate:{' '}
                  {InclusionOrExclusion.DiseaseOutsideProstate}
                </span>
                <span>
                  <Tick></Tick>
                </span>
              </TableRow>
            </>
          )}
        </TableBody>
      </TableWrapper>
    );
  }
  return (
    <TableWrapper>
      <TableHeadColor isPotential={isPotentialRes} />
      <TableBody>
        <TableHeaderText>Matching criteria</TableHeaderText>
        <TableRowHead>
          <span>Trial criteria</span>
          <span>Patient details</span>
        </TableRowHead>
        <TableRow>
          <span>
            Age: {minAgeNum} - {maxAgeNum}
          </span>
          <span>Age: {!age ? 'N/A' : ageNearlyEligible ? `${age}*` : age}</span>
        </TableRow>
        <TableRow>
          <span>Condition: {Conditions.map(i => `${i}, `)}</span>
          <span>Condition: {cancerType || 'N/A'} </span>
        </TableRow>
        <TableRow>
          <span>Gender: {Gender}</span>
          <span>Gender: {gender || 'N/A'}</span>
        </TableRow>
        <TableRow>
          <span>ECOG status: {InclusionOrExclusion.ECOGStatus} </span>
          <span>
            ECOG status:{' '}
            {!ECOGStatus
              ? 'N/A'
              : ECOGNearlyEligible
              ? `${ECOGStatus}*`
              : ECOGStatus}
          </span>
        </TableRow>
        <TableRow>
          <span>Gleason score: {InclusionOrExclusion.Gleason}</span>
          <span>Gleason score: {gleasonScore || 'N/A'}</span>
        </TableRow>
        <TableRow>
          <span>
            Disease within prostate:{' '}
            {InclusionOrExclusion.DiseaseWithinProstate}
          </span>
          <span>Disease within prostate: {DiseaseWithinProstate || 'N/A'}</span>
        </TableRow>
        <TableRow>
          <span>
            Disease outside prostate:{' '}
            {InclusionOrExclusion.DiseaseOutsideProstate}
          </span>
          <span>
            Disease outside prostate: {DiseaseOutsideProstate || 'N/A'}
          </span>
        </TableRow>
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
