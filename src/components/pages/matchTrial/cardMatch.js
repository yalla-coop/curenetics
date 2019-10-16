import React from 'react';
import Table from './table';

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

const matchCard = ({
  trial: {
    id,
    eligibilityStatus,
    trialInfo: {
      nct,
      title,
      startingDate,
      endingDate,
      phase,
      overallStatus,
      enrolled,
      interventions,
      sponsors,
      allocation,
      detailsLink,
      locations,
    },
    matchingInfo,
  },
}) => {
  return (
    <Wrapper key={id + nct}>
      <HeadSection>
        <div>
          <PrimarySpam>NCT Number: </PrimarySpam>
          <span>{nct}</span>
        </div>
        <PrimarySpam bold>PRONOUNCE</PrimarySpam>
      </HeadSection>
      <HeadPragraph>{title}</HeadPragraph>
      <ThreeColumnSection>
        <ColumnSection>
          <FieldWrapper>
            <div>
              <Calendar />
            </div>
            <ColumnSection>
              <span>Starting Date: {startingDate}</span>
              <span>Finish Date: {endingDate}</span>
            </ColumnSection>
          </FieldWrapper>
        </ColumnSection>
        <ColumnSection>
          <FieldWrapper>
            <div>
              <Avatar />
            </div>
            <span>Phase: {phase}</span>
          </FieldWrapper>
          <FieldWrapper>
            <div>
              <Tick />
            </div>
            <span>{overallStatus}</span>
          </FieldWrapper>
        </ColumnSection>
        <FieldWrapper>
          <div>
            <Avatar />
          </div>
          <span>Enrolled: {enrolled}</span>
        </FieldWrapper>
      </ThreeColumnSection>
      <TwoColumnSection>
        <FieldWrapper>
          <div>
            <TestTube width="24px" style={{ height: '24px' }}></TestTube>
          </div>
          <span>Interventions: {interventions.map(i => `${i}, `)}</span>
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <Plus />
          </div>
          <span>Sponsor/Collaborators: {sponsors.map(i => `${i}, `)}</span>
        </FieldWrapper>
      </TwoColumnSection>
      <FieldWrapper>
        <div>
          <Stethiscope />
        </div>
        <span>Allocation: {allocation}</span>
      </FieldWrapper>
      <Table matchingInfo={matchingInfo} />
      <section>
        <BoldParagraph>Nearest Trial Locations: </BoldParagraph>
        {locations.map((location, index) => {
          return (
            <LocationSection key={location.name + id}>
              <span>
                <Marker width="14px" />5 miles
              </span>
              <span>{`${location.name}, ${location.address}`}</span>
            </LocationSection>
          );
        })}
        <BottomSection>
          <ViewFullTrial>
            <ExternalLink />
            Click here to view full Clinical Trial details
          </ViewFullTrial>
          <ExportButton>
            Export trial to pdf
            <ExportLink style={{ marginLeft: '10px' }} />
          </ExportButton>
        </BottomSection>
      </section>
    </Wrapper>
  );
};

export default matchCard;
