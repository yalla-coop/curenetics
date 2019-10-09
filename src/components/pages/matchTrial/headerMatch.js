import React from 'react';
import 'antd/dist/antd.css';
import ExportLink from '../../common/icons/ExportLink';

import * as S from './style';
import { colors } from '../../../styles/globalStyles';

const HeaderMatch = () => {
  return (
    <>
      <S.DetailWrapper>
        <div>
          <S.HighLight>Potentialy eligible trials:</S.HighLight>
          <S.HighLightNumber style={{ color: colors.confirm }}>
            4
          </S.HighLightNumber>
        </div>
        <S.DetailSection>
          <div style={{ display: 'flex' }}>
            <S.HighLight>Nearly eligible Trials:</S.HighLight>
            <S.HighLightNumber style={{ color: colors.accent }}>
              3
            </S.HighLightNumber>
          </div>
          <S.ExportButton>
            Export all trials to PDF
            <ExportLink margin="0px 0px 0px 10px"></ExportLink>
          </S.ExportButton>
        </S.DetailSection>
      </S.DetailWrapper>
      <S.PrimaryParagraph>Potentially Eligible trials</S.PrimaryParagraph>
    </>
  );
};

export default HeaderMatch;
