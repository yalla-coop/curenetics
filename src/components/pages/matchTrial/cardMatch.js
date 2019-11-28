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
  DateSpan,
} from './style';

const matchCard = ({ trial, patientsInfo }) => {
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
        <PrimarySpam bold></PrimarySpam>
      </HeadSection>
      <HeadPragraph>{Title}</HeadPragraph>
      <ThreeColumnSection>
        <ColumnSection>
          <FieldWrapper>
            <div>
              <Calendar />
            </div>
            <ColumnSection>
              <DateSpan>Starting Date: {'N/A'}</DateSpan>
              <span>Finish Date: {'N/A'}</span>
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
            <span>Status: {OverallStatus}</span>
          </FieldWrapper>
        </ColumnSection>
        <FieldWrapper>
          <div>
            <Avatar />
          </div>
          <span>Enrolled: {'N/A'}</span>
        </FieldWrapper>
      </ThreeColumnSection>
      <TwoColumnSection>
        <FieldWrapper>
          <div>
            <TestTube width="24px" style={{ height: '24px' }}></TestTube>
          </div>
          {/* <span>Interventions: {['N/A'].map(i => `${i}, `)}</span> */}
          <span>Interventions: {'N/A'}</span>
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <Plus />
          </div>
          <span>
            {/* Sponsor/Collaborators: {['N/A'].map(i => `${i}, `)} */}
            Sponsor/Collaborators: {'N/A'}
          </span>
        </FieldWrapper>
      </TwoColumnSection>
      <FieldWrapper>
        <div>
          <Stethiscope />
        </div>
        <span>Allocation: {'N/A'}</span>
      </FieldWrapper>
      {/* the matching trials table */}
      <Table trial={trial} patientsInfo={patientsInfo} />

      <section>
        <BoldParagraph>Nearest Trial Locations: </BoldParagraph>
        {Locations.map(location => {
          const {
            Facility: {
              Name,
              Address: { City, Zip, distance },
            },
          } = location;
          return (
            <LocationSection key={Date.now() + Zip}>
              <span>
                <Marker width="14px" />
                {distance || 'N/A'} miles
              </span>
              <span>{`${Name}, ${City} ${Zip}`}</span>
            </LocationSection>
          );
        })}
        <BottomSection>
          <a
            href={`https://ClinicalTrials.gov/show/${NCTID}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <ViewFullTrial>
              <ExternalLink />
              Click here to view full Clinical Trial details
            </ViewFullTrial>
          </a>
          <ExportButton
            document={
              <PdfTemplate data={[trial]} patientsInfo={patientsInfo} />
            }
          >
            Export trial to pdf
            <ExportLink style={{ marginLeft: '10px' }} />
          </ExportButton>
        </BottomSection>
      </section>
    </Wrapper>
  );
};

export default matchCard;
