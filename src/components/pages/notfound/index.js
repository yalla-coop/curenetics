import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { buttonReset, buttonMixin } from '../../common/Buttons';

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

const NotFound = () => (
  <>
    <Header isCenter>
      <Title>404: Page not found</Title>
      <Paragraph>You have searched for a page that is not there</Paragraph>
      <BackLink to='/'>Back to Home</BackLink>
    </Header>
  </>
);

export default NotFound;