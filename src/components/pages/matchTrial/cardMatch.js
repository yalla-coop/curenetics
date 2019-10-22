import React from 'react';

import Table from './table';
import PdfTemplate from '../../common/pdf/pdfTemplate';

import ExportLink from '../../common/icons/ExportLink';
import ExternalLink from '../../common/icons/ExternalLink';
import Avatar from '../../common/icons/Avatar';
import Calendar from '../../common/icons/Calendar';
import Tick from '../../common/icons/Tick';
import TestTube from '../../common/icons/TestTube';
import Plus from '../../common/icons/Plus';
import Marker from '../../common/icons/Marker';
import Stethiscope from '../../common/icons/Stethiscope';
import {
  Wrapper,
  HeadSection,
  PrimarySpam,
  HeadPragraph,
  ColumnSection,
  FieldWrapper,
  BoldParagraph,
  ExportButton,
  LocationSection,
  BottomSection,
  ThreeColumnSection,
  TwoColumnSection,
  ViewFullTrial,
} from './style';

// const matchCard = ({
//   trial: {
//     id,
//     eligibilityStatus,
//     trialInfo: {
//       nct,
//       title,
//       startingDate,
//       endingDate,
//       phase,
//       overallStatus,
//       enrolled,
//       interventions,
//       sponsors,
//       allocation,
//       detailsLink,
//       locations,
//     },
//     matchingInfo,
//   },
//   trial,
//   isPotential,
// }) => {
const matchCard = props => {
  const { trial, patientsInfo } = props;
  const {
    Phase,
    OverallStatus,
    Locations,
    IDInfo: { NCTID, Title },
  } = trial;
  return (
    <Wrapper key={Date.now() + NCTID}>
      <HeadSection>
        <div>
          <PrimarySpam>NCT Number: </PrimarySpam>
          <span>{NCTID}</span>
        </div>
        <PrimarySpam bold>PRONOUNCE</PrimarySpam>
      </HeadSection>
      <HeadPragraph>{Title}</HeadPragraph>
      <ThreeColumnSection>
        <ColumnSection>
          <FieldWrapper>
            <div>
              <Calendar />
            </div>
            <ColumnSection>
              <span>Starting Date: {'No data found'}</span>
              <span>Finish Date: {'No data found'}</span>
            </ColumnSection>
          </FieldWrapper>
        </ColumnSection>
        <ColumnSection>
          <FieldWrapper>
            <div>
              <Avatar />
            </div>
            <span>Phase: {Phase}</span>
          </FieldWrapper>
          <FieldWrapper>
            <div>
              <Tick />
            </div>
            <span>{OverallStatus}</span>
          </FieldWrapper>
        </ColumnSection>
        <FieldWrapper>
          <div>
            <Avatar />
          </div>
          <span>Enrolled: {'No data found'}</span>
        </FieldWrapper>
      </ThreeColumnSection>
      <TwoColumnSection>
        <FieldWrapper>
          <div>
            <TestTube width="24px" style={{ height: '24px' }}></TestTube>
          </div>
          <span>Interventions: {['No data found'].map(i => `${i}, `)}</span>
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <Plus />
          </div>
          <span>
            Sponsor/Collaborators: {['No data found'].map(i => `${i}, `)}
          </span>
        </FieldWrapper>
      </TwoColumnSection>
      <FieldWrapper>
        <div>
          <Stethiscope />
        </div>
        <span>Allocation: {'No data found'}</span>
      </FieldWrapper>
      <Table trial={trial} patientsInfo={patientsInfo} />
      <section>
        <BoldParagraph>Nearest Trial Locations: </BoldParagraph>
        {Locations.map(location => {
          const {
            Facility: {
              Name,
              Address: { City, Zip },
            },
          } = location;
          return (
            <LocationSection key={Date.now() + Zip}>
              <span>
                <Marker width="14px" />5 miles
              </span>
              <span>{`${Name}, ${City} ${Zip}`}</span>
            </LocationSection>
          );
        })}
        <BottomSection>
          <ViewFullTrial>
            <ExternalLink />
            Click here to view full Clinical Trial details
          </ViewFullTrial>
          {/* <ExportButton document={<PdfTemplate data={[trial]} />}> */}
          <ExportButton document={<PdfTemplate data={[]} />}>
            Export trial to pdf
            <ExportLink style={{ marginLeft: '10px' }} />
          </ExportButton>
        </BottomSection>
      </section>
    </Wrapper>
  );
};

export default matchCard;
