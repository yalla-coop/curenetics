import React from 'react';
import styled from 'styled-components';

import Calendar from '../../common/icons/Calendar';
import Phase from '../../common/icons/Phase';
import Avatar from '../../common/icons/Avatar';
import Tick from '../../common/icons/Tick';
import TestTube from '../../common/icons/TestTube';
import Plus from '../../common/icons/Plus';
import Stethiscope from '../../common/icons/Stethiscope';

import { breakpoint } from '../../../styles/globalStyles';

const DetailGrid = styled.div`
  @media only screen and (min-width: ${breakpoint.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding-bottom: 4rem;
  }
  @media only screen and (min-width: ${breakpoint.large}) {
    grid-gap: 2rem 4rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2rem;
  > svg {
    margin-right: 1rem;
  }
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    flex-direction: row;
    align-items: center;
  }
`;


// part of the result card with the most icons
const ResultDetails = ({
  startDate = 'Unknown',
  finishDate = 'Unknown',
  phase = 'Unknown',
  enrolled = 'Unknown',
  status = 'Unknown',
  interventions = 'Unknown',
  sponsors = 'Unknown',
  allocation = 'Unknown',
}) => (
  <DetailGrid>
    <DetailItem>
      <Calendar />
      <div>
        Starting Date: {startDate}<br/>
        Finishing Date: {finishDate}
      </div>
    </DetailItem>
    <DetailItem>
      <Phase />
      Phase: {phase}
    </DetailItem>
    <DetailItem>
      <Avatar />
      Enrolled: {enrolled}
    </DetailItem>
    <DetailItem>
      <Tick />
      Recruiting: {status}
    </DetailItem>
    <DetailItem>
      <TestTube />
      Interventions: {interventions}
    </DetailItem>
    <DetailItem>
      <Plus />
      Sponsors / Collaborators: {sponsors}
    </DetailItem>
    <DetailItem>
      <Stethiscope />
      Allocation: {allocation}
    </DetailItem>
  </DetailGrid>
);

export default ResultDetails
;