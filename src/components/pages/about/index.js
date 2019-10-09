import React from 'react';
import styled from 'styled-components';

import Chevron from '../../common/icons/Chevron';

import { BacklinkContainer, Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { BackLink, Anchor } from '../../common/Buttons';

const HomeAnchor = styled(Anchor)`
  margin: 2rem auto;
  display: block;
`;

const About = () => (
  <>
    <BacklinkContainer>
      <BackLink to="/">
        <Chevron width={20} />
      </BackLink>
    </BacklinkContainer>
    <Header isCenter>
      <Title>About Curenetics</Title>
      <Paragraph>A page about this app etc.</Paragraph>
      <HomeAnchor to="/">Back to Home</HomeAnchor>
    </Header>
  </>
);

export default About;
