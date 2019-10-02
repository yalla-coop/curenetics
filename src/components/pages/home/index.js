import React from 'react';
import styled from 'styled-components';
import Keyboard from '../../common/icons/Keyboard';

import { sectionMixin, Header, columnMixin } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { AnchorButton, IconAnchor } from '../../common/Buttons';

import { breakpoint, colors } from '../../../styles/globalStyles';

const LinkContainer = styled.div`
  ${sectionMixin};
  @media only screen and (min-width: ${breakpoint.tablet}) {
    display: flex;
    align-items: center;
  }
`;

const UploadLink = styled(AnchorButton)`
  ${columnMixin};
  margin-bottom: 2rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

const SearchLink = styled(IconAnchor)`
  ${columnMixin};
  margin-top: 1rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const Home = () => (
  <>
    <Header>
      <Title>Match patient data to clinical trial criteria</Title>
      <Paragraph>This app automates the process of matching patients to suitable clinical trials. It narrows the selection making the final choice a simpler and quicker task.</Paragraph>
      <Paragraph>To start either select the button to upload one or more PDF files or click the icon to type in data manually</Paragraph>
    </Header>

    <LinkContainer hasColumns>
      <UploadLink to='/upload'>Upload PDFs of patient data</UploadLink>
      <SearchLink to='/enter'><Keyboard fill={colors.primary} width={30}/>Or type in patient details</SearchLink>

      <SearchLink isSolid to='/enter'><Keyboard fill={colors.white} width={30}/>Or type in patient details</SearchLink>
    </LinkContainer>
  </>
);

export default Home;