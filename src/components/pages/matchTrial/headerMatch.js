import React from 'react';
import ExportLink from '../../common/icons/ExportLink';
import PdfTemplate from '../../common/pdf/pdfTemplate';

import {
  ExportButton,
  DetailWrapper,
  HighLight,
  HighLightNumber,
  DetailSection,
  PrimaryParagraph,
} from './style';

import { colors } from '../../../styles/globalStyles';

const renderHeader = (matchedTrials, size, wait) => {
  const nearlyEligibleTrials = matchedTrials.filter(trial => {
    const { ECOGNearlyEligible = false, ageNearlyEligible = false } = trial;
    return ECOGNearlyEligible === true || ageNearlyEligible === true;
  }).length;
  const potentiallyEligibleTrials = size - nearlyEligibleTrials;

  return (
    <>
      <div>
        <HighLight>Potentialy eligible trials:</HighLight>
        <HighLightNumber color={colors.confirm}>
          {potentiallyEligibleTrials}
        </HighLightNumber>
      </div>
      <DetailSection>
        <div>
          <HighLight>Nearly eligible Trials:</HighLight>
          <HighLightNumber color={colors.accent}>
            {nearlyEligibleTrials}
          </HighLightNumber>
        </div>
        <ExportButton
          // document={<PdfTemplate data={wait ? matchedTrials : []} />}
          document={<PdfTemplate data={wait ? [] : []} />}
        >
          Export all trials to PDF
          <ExportLink style={{ marginLeft: '10px' }}></ExportLink>
        </ExportButton>
      </DetailSection>
    </>
  );
};

const HeaderMatch = ({ patientsInfo, wait }) => {
  const {
    matchedTrials: { data, size },
  } = patientsInfo;
  console.log(111, data);
  return (
    <>
      <DetailWrapper>{renderHeader(data, size, wait)}</DetailWrapper>
      <PrimaryParagraph>Potentially Eligible trials</PrimaryParagraph>
    </>
  );
};

export default HeaderMatch;
