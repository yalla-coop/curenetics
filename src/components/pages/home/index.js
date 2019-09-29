import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { sectionMixin, Container, columnMixin } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { buttonReset, buttonMixin } from '../../common/Buttons';

import { breakpoint, colors } from '../../../styles/globalStyles';

const LinkContainer = styled.div`
  ${sectionMixin};
  @media only screen and (min-width: ${breakpoint.tablet}) {
    display: flex;
  }
`;

const UploadLink = styled(Link)`
  ${buttonReset};
  ${buttonMixin};
  ${columnMixin};
  text-align: center;
  &:hover {
    color: ${colors.white};
  }
  margin-bottom: 1rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const SearchLink = styled(Link)`
  ${buttonReset};
  ${columnMixin};
  display: flex;
  align-items: center;
  margin-top: 1rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const Home = () => (
  <Fragment>

    <Container>
      <Title>Match patient data to clinical trial criteria</Title>
      <Paragraph>This app automates the process of matching patients to suitable clinical trials. It narrows the selection making the final choice a simpler and quicker task.</Paragraph>
      <Paragraph>To start either select the button to upload one or more PDF files or click the icon to type in data manually</Paragraph>
    </Container>

    <LinkContainer hasColumns>
      <UploadLink to='/upload'>Upload PDFs of patient data</UploadLink>
      <SearchLink to='/enter'>Or type in patient details</SearchLink>
    </LinkContainer>

  </Fragment>
);

export default Home;