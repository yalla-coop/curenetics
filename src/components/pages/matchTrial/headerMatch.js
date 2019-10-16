import React from 'react';
import ExportLink from '../../common/icons/ExportLink';

import {
  ExportButton,
  DetailWrapper,
  HighLight,
  HighLightNumber,
  DetailSection,
  PrimaryParagraph,
} from './style';

import { colors } from '../../../styles/globalStyles';

const HeaderMatch = () => {
  return (
    <>
      <DetailWrapper>
        <div>
          <HighLight>Potentialy eligible trials:</HighLight>
          <HighLightNumber color={colors.confirm}>4</HighLightNumber>
        </div>
        <DetailSection>
          <div>
            <HighLight>Nearly eligible Trials:</HighLight>
            <HighLightNumber color={colors.accent}>3</HighLightNumber>
          </div>
          <ExportButton>
            Export all trials to PDF
            <ExportLink style={{ marginLeft: '10px' }}></ExportLink>
          </ExportButton>
        </DetailSection>
      </DetailWrapper>
      <PrimaryParagraph>Potentially Eligible trials</PrimaryParagraph>
    </>
  );
};

export default HeaderMatch;
