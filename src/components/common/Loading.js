import React from 'react';
import styled from 'styled-components';
import Spinner from './icons/Spinner';
import { Header } from './Layout';
import { Title, Paragraph } from './Typography';

const Spacer = styled.div`
  padding-top: 6rem;
`;

const title1 = 'Processing....';
const para1a =
  'We are currently analysing the data to extract the relevant medical entities.';
const para1b =
  'This can take a few minutes so please do not refresh this page.';

const title2 = 'Finding Clinical Trials....';
const para2a =
  'We are currently filtering Clinical Trials across the UK to find matches for each of the entries provided.';

const Loading = ({ processing }) => (
  <>
      
    <Header isCenter>
      <Spacer />
      <Spinner />
      <Title>{processing ? title1 : title2}</Title>
      <Paragraph>{processing ? para1a : para2a}</Paragraph>
      <Paragraph>{para1b}</Paragraph>    
    </Header>
  </>
);

export default Loading;
