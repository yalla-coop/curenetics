import React from 'react';
import styled from 'styled-components';

import Chevron from '../../common/icons/Chevron';

import { matchData } from './dummyMatchData';
import { TrialCard } from './trialCard';

import { BacklinkContainer, sectionMixin, Header } from '../../common/Layout';
import { Title } from '../../common/Typography';
import { BackLink } from '../../common/Buttons';

const ContentContainer = styled.div`
  ${sectionMixin};
`;

// isPotential determines green or orange colour
// - this comes from dummyData.js (and actual data when we get there)
const MatchTrial = () => {
  return (
    <>
      <BacklinkContainer>
        <BackLink to="/">
          <Chevron width={20} />
        </BackLink>
      </BacklinkContainer>

      <Header>
        <Title>Matched trials for patient:</Title>
      </Header>

      <ContentContainer>
        {matchData.map(i => (
          <TrialCard
            key={i.id}
            data={i}
            isPotential={i.eligibilityStatus === 'potential'}
          />
        ))}
      </ContentContainer>
    </>
  );
};

export default MatchTrial;
