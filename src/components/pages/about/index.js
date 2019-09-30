import React from 'react';

import Arrow from '../../common/icons/Arrow';

import { BreadCrumb, Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { Crumb, BackLink } from '../../common/Buttons';

import { colors } from '../../../styles/globalStyles';


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