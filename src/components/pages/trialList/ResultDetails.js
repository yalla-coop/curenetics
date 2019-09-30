import React from 'react';
import styled from 'styled-components';

import Calendar from '../../common/icons/Calendar';
import Phase from '../../common/icons/Phase';
import Avatar from '../../common/icons/Avatar';
import Tick from '../../common/icons/Tick';
import TestTube from '../../common/icons/TestTube';
import Plus from '../../common/icons/Plus';
import Stethiscope from '../../common/icons/Stethiscope';

// not in this part of the design:
// > here for testing purposes
import Warning from '../../common/icons/Warning';
import Pointer from '../../common/icons/Pointer';
import Marker from '../../common/icons/Marker';
import Spinner from '../../common/icons/Spinner';
import ExportLink from '../../common/icons/ExportLink';
import ExternalLink from '../../common/icons/ExternalLink';
import Keyboard from '../../common/icons/Keyboard';

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

    <h2>Temporary icon test bed:</h2>

    <Warning width={100}/>
    <Warning width={70}/>
    <Warning />
    <Warning addOutine width={100}/>
    <Warning addOutine width={70}/>
    <Warning addOutine />
    <Pointer />
    <Marker />
    <Spinner />
    <Spinner width={50}/>
    <ExportLink fill='#35348f' />
    <ExternalLink />
    <Keyboard fill='#35348f' />
    <Keyboard fill='#35348f' width={50} />

  </DetailGrid>
);

export default ResultDetails
;