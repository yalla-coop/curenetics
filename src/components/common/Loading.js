import React from 'react';
import styled from 'styled-components';
import Spinner from './icons/Spinner';
import { Header, Container } from './Layout';
import { Title, Paragraph } from './Typography';

const Spacer = styled.div`
  padding-top: 6rem;
`;

const title1 = 'Processing....';
const para1a = 'We are currently analysing the data to extract the relevant medical entities.';
const para1b = 'This can take a few minutes so please do not refresh this page.';

const title2 = 'Finding Clinical Trials....';
const para2a = 'We are currently filtering Clinical Trials across the UK to find matches for each of the entries provided.';
const para2b = 'This can take a few minutes so please do not refresh this page.';

const Loading = () => (
  <>  
      <Header isCenter><Spacer />
      <Spinner />
      <Title>{title1}</Title>
      <Paragraph>{para1a}</Paragraph>
      <Paragraph>{para1b}</Paragraph>    
      </Header>
  </>
);

export default Loading;
