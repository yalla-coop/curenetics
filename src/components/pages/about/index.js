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
const pStyle = {
  textAlign: 'left'
};

const About = () => (
  <>
    <BacklinkContainer>
      <BackLink to="/">
        <Chevron width={20} />
      </BackLink>
    </BacklinkContainer>
    <Header isCenter>
      <Title>About Curenetics</Title>
      <Paragraph style={pStyle}>In diseases, such as cancer, through our AI algorithms, domain expertise and ability to analyse complex medical data, we are giving patients hope by helping to recruit them to most suitable clinical trials. At the same time helping trial groups meet recruitment targets and hence save costs and reduce time to trial completion.</Paragraph>
      <Paragraph style={pStyle}>About 4% of patients in the UK end up being recruited to clinical trials despite over 70% of patients saying they would like to be offered the opportunity to be involved in a clinical trial. Two thirds of clinical trials still fail in the UK despite best efforts. We are determined to turn around this trend by improving patient access and engagement with trials and providing hope of new treatments and even a cure for various diseases to millions of people around the world.</Paragraph>
      <HomeAnchor to="/">Back to Home</HomeAnchor>
    </Header>
  </>
);

export default About;
