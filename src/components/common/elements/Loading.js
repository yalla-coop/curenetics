import React from 'react';
import styled from 'styled-components';
import Spinner from '../icons/Spinner';
import { Title, Paragraph } from '../Typography';

const LoadingContainer = styled.div`
  text-align: center;
`;

const title1 = 'Processing....';
const para1a = 'We are currently analysing the data to extract the relevant medical entities.';
const para1b = 'This can take a few minutes so please do not refresh this page.';

// const title2 = 'Finding Clinical Trials....';
// const para2a = 'We are currently filtering Clinical Trials across the UK to find matches for each of the entries provided.';
// const para2b = 'This can take a few minutes so please do not refresh this page.';

// - - -
// if we have several different loading states:
// const title = loadingState === 0 ? title1 : title2;
// const paragraph = loadingState === 0 ? paragraph1 : paragraph2;

// the component would require the loadingState prop, in this instance:
// const Loading = ({ loadingState === 0 }) => (

const Loading = () => (
  <LoadingContainer>
    <Spinner />
    <Title>{title1}</Title>
    <Paragraph>{para1a}</Paragraph>
    <Paragraph>{para1b}</Paragraph>
  </LoadingContainer>
);

export default Loading;
