import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

import { Header } from './Layout';
import { Title, Paragraph } from './Typography';

const Spacer = styled.div`
  padding-top: 6rem;
`;

const processTitle = 'Processing....';
const processPara =
  'We are currently analysing the data to extract the relevant medical entities.';
const refresh =
  'This can take a few minutes so please do not refresh this page.';

const clinicTitle = 'Finding Clinical Trials....';
const clinicPara =
  'We are currently filtering Clinical Trials across the UK to find matches for each of the entries provided.';

const Loading = ({ processing }) => (
  <>
    <Header isCenter>
      <Spacer />
      <Spin size="large" />
      <Title>{processing ? processTitle : clinicTitle}</Title>
      <Paragraph>{processing ? processPara : clinicPara}</Paragraph>
      <Paragraph>{refresh}</Paragraph>
    </Header>
  </>
);

export default Loading;
