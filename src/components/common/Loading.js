import React from 'react';
import styled from 'styled-components';
import Spinner from './icons/Spinner';
import { breakpoint } from '../../styles/globalStyles';
import { Header, Container } from '../common/Layout';
import { Title, Paragraph } from '../common/Typography';

const Spacer = styled.div`
  padding-top: 6rem;
`;

let title1 = 'Processing....';
let para1a = 'We are currently analysing the data to extract the relevant medical entities.';
let para1b = 'This can take a few minutes so please do not refresh this page.';

let title2 = 'Finding Clinical Trials....';
let para2a = 'We are currently filtering Clinical Trials across the UK to find matches for each of the entries provided.';
let para2b = 'This can take a few minutes so please do not refresh this page.';

const Loading = () => (
  <>  
      <Header><Spacer />
      <Spinner />
      <Title>{title1}</Title>
      <Paragraph>{para1a}</Paragraph>
      <Paragraph>{para1b}</Paragraph>    
      </Header>
  </>
);

export default Loading;
