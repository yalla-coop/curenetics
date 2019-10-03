import React from 'react';

import Chevron from '../../common/icons/Chevron';

import { BreadCrumb, Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { Crumb, AnchorButton } from '../../common/Buttons';

const About = () => (
  <>
    <BreadCrumb>
      <Crumb to='/'><Chevron width={20}/></Crumb>
    </BreadCrumb>
    <Header isCenter>
      <Title>About Curenetics</Title>
      <Paragraph>A page about this app etc.</Paragraph>
      <AnchorButton to='/'>Back to Home</AnchorButton>
    </Header>
  </>
);

export default About;