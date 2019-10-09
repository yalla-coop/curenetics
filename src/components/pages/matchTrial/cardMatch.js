import React from 'react';
import 'antd/dist/antd.css';
import Table from './table';

import ExportLink from '../../common/icons/ExportLink';
import ExternalLink from '../../common/icons/ExternalLink';
import Avatar from '../../common/icons/Avatar';
import Calendar from '../../common/icons/Calendar';
import Tick from '../../common/icons/Tick';
import TestTube from '../../common/icons/TestTube';
import Plus from '../../common/icons/Plus';
import Marker from '../../common/icons/Marker';

import * as S from './style';

const matchCard = ({ windowWidth }) => {
  return (
    <S.Wrapper>
      <S.HeadSection>
        <div>
          <S.PrimarySpam>NCT Number: </S.PrimarySpam>
          <span>NCT0355514</span>
        </div>
        <S.PrimarySpam style={{ fontWeight: 'bold' }}>PRONOUNCE</S.PrimarySpam>
      </S.HeadSection>
      <S.HeadPragraph>
        A Trial Comparing Cardiovascular Safety of Degarelix Versus Leuprolide
        in Patients With Advanced Prostate Cancer and Cardiovascular Disease
      </S.HeadPragraph>
      <S.RowSection>
        <S.ColumnSection>
          <S.FieldWrapper>
            <div>
              <Calendar></Calendar>
            </div>
            <div>
              <span>Starting Date: Sept 27, 2018</span>
              <span>Finish Date: Ongoing</span>
            </div>
          </S.FieldWrapper>
        </S.ColumnSection>
        <S.ColumnSection>
          <S.FieldWrapper>
            <div>
              <Avatar></Avatar>
            </div>
            <span>Phase: 3</span>
          </S.FieldWrapper>
          <S.FieldWrapper>
            <div>
              <Tick></Tick>
            </div>
            <span>Recruiting</span>
          </S.FieldWrapper>
        </S.ColumnSection>
        <S.FieldWrapper>
          <div>
            <Avatar></Avatar>
          </div>
          <span>Enrolled: 6,000,000</span>
        </S.FieldWrapper>
      </S.RowSection>
      <S.RowSection>
        <S.FieldWrapper>
          <div>
            <TestTube></TestTube>
          </div>
          <span>Interventions: Degarelix, Leuprolide</span>
        </S.FieldWrapper>
        <S.FieldWrapper style={{ gridColumn: '2/4' }}>
          <div>
            <Plus></Plus>
          </div>
          <span>
            Sponsor/Collaborators: Ferring Pharmaceuticals, Memorial Sloan
            Kettering
          </span>
        </S.FieldWrapper>
      </S.RowSection>
      <S.FieldWrapper style={{ gridColumn: '2/4' }}>
        <div>
          <Plus></Plus>
        </div>
        <span>
          Allocation: Randomized. Intervention Model: Paralle. Assignment.
          Masking: Single (Outcomes Assessor). Primary Purpose: Treatment
        </span>
      </S.FieldWrapper>
      <Table windowWidth={windowWidth} />
      <section>
        <S.BoldParagraph>Nearest Trial Locations: </S.BoldParagraph>
        <S.LocationSection>
          <span>
            <Marker width="14px"></Marker>5 miles
          </span>
          <span>St Bartholomew’s Hospital, London EC1A 7JQ</span>
        </S.LocationSection>
        <S.BottomSection>
          <span style={{ gridColumn: '1 / 3' }}>
            <ExternalLink></ExternalLink>
            Click here to view full Clinical Trial details
          </span>
          <S.ExportButton style={{ gridColumn: '3 / 4' }}>
            Export all trials to PDF
            <ExportLink margin="0px 0px 0px 10px"></ExportLink>
          </S.ExportButton>
        </S.BottomSection>
      </section>
    </S.Wrapper>
  );
};

export default matchCard;
