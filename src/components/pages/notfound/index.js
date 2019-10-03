import React from 'react';

import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { AnchorButton } from '../../common/Buttons';


const NotFound = () => (
  <>
    <Header isCenter>
      <Title>404: Page not found</Title>
      <Paragraph>You have searched for a page that is not there</Paragraph>
      <AnchorButton to='/'>Back to Home</AnchorButton>
    </Header>
  </>
);

export default NotFound;