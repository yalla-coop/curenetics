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
  HeaderItem,
} from './style';

import { colors } from '../../../styles/globalStyles';

const getEligibilityTrialsCount = (matchedTrials, size) => {
  const nearlyEligibleTrials = matchedTrials.filter(trial => {
    const { ECOGNearlyEligible = false, ageNearlyEligible = false } = trial;
    return ECOGNearlyEligible === true || ageNearlyEligible === true;
  }).length;
  const potentiallyEligibleTrials = size - nearlyEligibleTrials;

  return {
    nearlyEligibleTrials,
    potentiallyEligibleTrials,
  };
};

const renderHeader = (matchedTrials, patientsInfo, size, fileReference) => {
  const {
    nearlyEligibleTrials,
    potentiallyEligibleTrials,
  } = getEligibilityTrialsCount(matchedTrials, size);

  return (
    <>
      <div>
        <HighLight>File name:</HighLight>
        <HighLightNumber>{fileReference}</HighLightNumber>
      </div>
      <HeaderItem>
        <HighLight>Potentialy eligible trials:</HighLight>
        <HighLightNumber color={colors.confirm}>
          {potentiallyEligibleTrials}
        </HighLightNumber>
      </HeaderItem>
      <DetailSection>
        <div>
          <HighLight>Nearly eligible Trials:</HighLight>
          <HighLightNumber color={colors.accent}>
            {nearlyEligibleTrials}
          </HighLightNumber>
        </div>
        <ExportButton
          document={
            <PdfTemplate
              data={matchedTrials}
              patientsInfo={patientsInfo}
              type="multiple"
            />
          }
        >
          Export all trials to PDF
          <ExportLink style={{ marginLeft: '10px' }} />
        </ExportButton>
      </DetailSection>
    </>
  );
};

const HeaderMatch = ({ patientsInfo }) => {
  const {
    matchedTrials: { data, size, fileReference },
  } = patientsInfo;

  return (
    <>
      <DetailWrapper>
        {renderHeader(data, patientsInfo, size, fileReference)}
      </DetailWrapper>
      <PrimaryParagraph>Potentially Eligible trials</PrimaryParagraph>
    </>
  );
};

export default HeaderMatch;
