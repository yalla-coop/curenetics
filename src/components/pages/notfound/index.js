import React from 'react';

import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { Anchor } from '../../common/Buttons';


const NotFound = () => (
  <>
    <Header isCenter>
      <Title>404: Page not found</Title>
      <Paragraph>You have searched for a page that is not there</Paragraph>
      <Anchor to="/">Back to Home</Anchor>
    </Header>
  </>
);

export default NotFound;
