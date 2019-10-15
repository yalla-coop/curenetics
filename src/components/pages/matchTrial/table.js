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

const Table = () => {
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
            <span>Age: 18-85</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>
              Condition: Prostate Cancer Metastatic, Castration-resistant
              Prostate Cancer
            </span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>Gender: Male</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>ECOG status: 2 </span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>Gleason score: 0-2</span>
            <span>
              <Tick></Tick>
            </span>
          </TableRow>
          <TableRow>
            <span>prostate: Yes</span>
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
          <span>Age: 18-85</span>
          <span>Age: 72</span>
        </TableRow>
        <TableRow>
          <span>
            Condition: Prostate Cancer Metastatic, Castration-resistant Prostate
            Cancer
          </span>
          <span>Condition: Prostate Cancer </span>
        </TableRow>
        <TableRow>
          <span>Gender: Male</span>
          <span>Gender: Male</span>
        </TableRow>
        <TableRow>
          <span>ECOG status: 2 </span>
          <span>ECOG status: 2 </span>
        </TableRow>
        <TableRow>
          <span>Gleason score: 0-2</span>
          <span>Gleason score: 0-2</span>
        </TableRow>
        <TableRow>
          <span>Disease within prostate: Yes</span>
          <span>Disease within prostate: Yes</span>
        </TableRow>
      </TableBody>
    </TableWrapper>
  );
};

export default Table;
