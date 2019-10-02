import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Chevron from '../../common/icons/Chevron';
import Plus from '../../common/icons/Plus'

import {
  BreadCrumb, sectionMixin, Header, columnMixin, Article, UploadCard,
 } from '../../common/Layout';
import { Title, SubHeading, OL, LI } from '../../common/Typography';
import { Crumb, buttonReset, IconButton } from '../../common/Buttons';

import { breakpoint, colors } from '../../../styles/globalStyles';

const ContentContainer = styled.div`
  ${sectionMixin};
  @media only screen and (min-width: ${breakpoint.tablet}) {
    display: flex;
  }
`;

const UploadColumn = styled.div`
  ${columnMixin};
  margin-top: 1rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-top: 0;
    margin-left: 1rem;
  }
`;

const EnterLink = styled(Link)`
  ${buttonReset};
  display: flex;
  align-items: center;
`;

const UploadButton = styled(IconButton)`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  margin: 0;
  @media only screen and (min-width: ${breakpoint.small}) {
    max-width: 4rem;
    margin: 0;
  }
  svg {
    margin-right: 0;
  }
`;


const Upload = () => {

  // logic to go here - file upload state etc.
  return (
    <>
  
      <BreadCrumb>
        <Crumb to='/'><Chevron width={20}/></Crumb>
      </BreadCrumb>
      
      <Header>
        <Title>Add your PDF files</Title>
      </Header>
  
      <ContentContainer hasColumns>
  
        <Article isLeft>
          <SubHeading>What to do:</SubHeading>
          <OL>
            <LI>Click on the Add your files button to select patients file(s). Only PDF files can be selected.</LI>
            <LI>Delete any file at any time</LI>
            <LI>When you’re ready click the Upload button to upload files.</LI>
          </OL>
        </Article>
  
        <UploadColumn>
          <UploadCard>
            <UploadButton
              isSolid
              aria-label='Upload PDF'><Plus fill={colors.white} width={48} />
            </UploadButton>

            upload stuff to go here...
          </UploadCard>
          <EnterLink to='/enter'>Or type in patient details</EnterLink>
        </UploadColumn>
  
      </ContentContainer>
  
    </>
  );
};

export default Upload;