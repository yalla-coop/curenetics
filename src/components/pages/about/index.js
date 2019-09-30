import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Arrow from '../../common/icons/Arrow';

import { BreadCrumb, Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { Crumb, buttonReset, buttonMixin } from '../../common/Buttons';

import { breakpoint, colors } from '../../../styles/globalStyles';

const BackLink = styled(Link)`
  ${buttonReset};
  ${buttonMixin};
  text-align: center;
  display: block;
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-top: 2rem;
  }
  &:hover {
    color: ${colors.white};
  }
`;

const About = () => (
  <>
    <BreadCrumb>
      <Crumb to='/'><Arrow width={80} direction='left' fill={colors.primary}/>Home / About</Crumb>
    </BreadCrumb>
    <Header isCenter>
      <Title>About Curenetics</Title>
      <Paragraph>A page about this app etc.</Paragraph>
      <BackLink to='/'>Back to Home</BackLink>
    </Header>
  </>
);

export default About;