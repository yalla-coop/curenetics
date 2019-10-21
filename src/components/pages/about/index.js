import React from 'react';
import styled from 'styled-components';
import SmallModal from '../../common/modal';

import Chevron from '../../common/icons/Chevron';

import { BacklinkContainer, Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { BackLink, Anchor } from '../../common/Buttons';

const HomeAnchor = styled(Anchor)`
  margin: 2rem auto;
  display: block;
`;
const pStyle = {
  textAlign: 'left',
};

const About = () => (
  <>
    <BacklinkContainer>
      <BackLink to="/">
        <Chevron width={20} />
      </BackLink>
    </BacklinkContainer>
    <SmallModal />
    <Header isCenter>
      <Title>About Curenetics</Title>
      <Paragraph style={pStyle}>
        Through our AI algorithms, domain expertise and ability to analyse
        complex medical data, we are giving patients hope, from diseases, such
        as cancer. By helping to recruit them to the most suitable clinical
        trials and helping trial groups meet recruitment targets, we are able to
        save costs and reduce time to trial completion.
      </Paragraph>
      <Paragraph style={pStyle}>
        Although over over 70% of patients saying they would like to be offered
        the opportunity to be involved in a clinical trial, only 4% of patients
        in the UK end up being recruited to clinical trials. Two thirds of
        clinical trials still fail in the UK despite best efforts. We are
        determined to turn around this trend by improving patient access and
        engagement with trials to provide hope of new treatments—and even a
        cure—for various diseases to millions of people around the world
      </Paragraph>
      <HomeAnchor to="/">Back to Home</HomeAnchor>
    </Header>
  </>
);

export default About;
