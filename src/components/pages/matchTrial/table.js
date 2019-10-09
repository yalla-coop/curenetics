import React from 'react';
import 'antd/dist/antd.css';
import Tick from '../../common/icons/Tick';

import * as S from './style';
import { breakpoint } from '../../../styles/globalStyles';

const Table = ({ windowWidth }) => {
  if (windowWidth < +breakpoint.tablet.split('px')[0]) {
    // small
    return (
      <S.tableLarge>
        <S.TableHeadColor></S.TableHeadColor>
        <div style={{ padding: '0rem 0rem 1rem 0rem' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.2rem' }}>
            Matching criteria
          </h2>
          <S.rowTableHead>
            <span>Trial</span>
            <span>Patient</span>
          </S.rowTableHead>
          <S.rowTable>
            <span>Age: 18-85</span>
            <span>
              <Tick></Tick>
            </span>
          </S.rowTable>
          <S.rowTable>
            <span>
              Condition: Prostate Cancer Metastatic, Castration-resistant
              Prostate Cancer
            </span>
            <span>
              <Tick></Tick>
            </span>
          </S.rowTable>
          <S.rowTable>
            <span>Gender: Male</span>
            <span>
              <Tick></Tick>
            </span>
          </S.rowTable>
          <S.rowTable>
            <span>ECOG status: 2 </span>
            <span>
              <Tick></Tick>
            </span>
          </S.rowTable>
          <S.rowTable>
            <span>Gleason score: 0-2</span>
            <span>
              <Tick></Tick>
            </span>
          </S.rowTable>
          <S.rowTable>
            <span>prostate: Yes</span>
            <span>
              <Tick></Tick>
            </span>
          </S.rowTable>
        </div>
      </S.tableLarge>
    );
  }
  return (
    <S.tableLarge>
      <S.TableHeadColor></S.TableHeadColor>
      <div style={{ padding: '0rem 0rem 1rem 0rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '1.2rem' }}>
          Matching criteria
        </h2>
        <S.rowTableHead>
          <span>Trial criteria</span>
          <span>Patient details</span>
        </S.rowTableHead>
        <S.rowTable>
          <span>Age: 18-85</span>
          <span>Age: 72</span>
        </S.rowTable>
        <S.rowTable>
          <span>
            Condition: Prostate Cancer Metastatic, Castration-resistant Prostate
            Cancer
          </span>
          <span>Condition: Prostate Cancer </span>
        </S.rowTable>
        <S.rowTable>
          <span>Gender: Male</span>
          <span>Gender: Male</span>
        </S.rowTable>
        <S.rowTable>
          <span>ECOG status: 2 </span>
          <span>ECOG status: 2 </span>
        </S.rowTable>
        <S.rowTable>
          <span>Gleason score: 0-2</span>
          <span>Gleason score: 0-2</span>
        </S.rowTable>
        <S.rowTable>
          <span>Disease within prostate: Yes</span>
          <span>Disease within prostate: Yes</span>
        </S.rowTable>
      </div>
    </S.tableLarge>
  );
};

export default Table;
