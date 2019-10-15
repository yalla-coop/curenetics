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

const matchCard = () => {
  return (
    <Wrapper>
      <HeadSection>
        <div>
          <PrimarySpam>NCT Number: </PrimarySpam>
          <span>NCT0355514</span>
        </div>
        <PrimarySpam bold>PRONOUNCE</PrimarySpam>
      </HeadSection>
      <HeadPragraph>
        A Trial Comparing Cardiovascular Safety of Degarelix Versus Leuprolide
        in Patients With Advanced Prostate Cancer and Cardiovascular Disease
      </HeadPragraph>
      <ThreeColumnSection>
        <ColumnSection>
          <FieldWrapper>
            <div>
              <Calendar />
            </div>
            <ColumnSection>
              <span>Starting Date: Sept 27, 2018</span>
              <span>Finish Date: Ongoing</span>
            </ColumnSection>
          </FieldWrapper>
        </ColumnSection>
        <ColumnSection>
          <FieldWrapper>
            <div>
              <Avatar />
            </div>
            <span>Phase: 3</span>
          </FieldWrapper>
          <FieldWrapper>
            <div>
              <Tick />
            </div>
            <span>Recruiting</span>
          </FieldWrapper>
        </ColumnSection>
        <FieldWrapper>
          <div>
            <Avatar />
          </div>
          <span>Enrolled: 6,000,000</span>
        </FieldWrapper>
      </ThreeColumnSection>
      <TwoColumnSection>
        <FieldWrapper>
          <div>
            <TestTube width="24px" style={{ height: '24px' }}></TestTube>
          </div>
          <span>Interventions: Degarelix, Leuprolide</span>
        </FieldWrapper>
        <FieldWrapper>
          <div>
            <Plus />
          </div>
          <span>
            Sponsor/Collaborators: Ferring Pharmaceuticals, Memorial Sloan
            Kettering
          </span>
        </FieldWrapper>
      </TwoColumnSection>
      <FieldWrapper>
        <div>
          <Stethiscope />
        </div>
        <span>
          Allocation: Randomized. Intervention Model: Paralle. Assignment.
          Masking: Single (Outcomes Assessor). Primary Purpose: Treatment
        </span>
      </FieldWrapper>
      <Table />
      <section>
        <BoldParagraph>Nearest Trial Locations: </BoldParagraph>
        <LocationSection>
          <span>
            <Marker width="14px" />5 miles
          </span>
          <span>St Bartholomew’s Hospital, London EC1A 7JQ</span>
        </LocationSection>
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
