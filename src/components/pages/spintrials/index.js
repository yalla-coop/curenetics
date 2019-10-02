import React from 'react';
import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import Spinner from '../../common/icons/Spinner';

const Spintrials = () => (
  <>
    <Header isCenter>
      <Spinner/>
      <Title>Matching Clinical Trials...</Title>
      <Paragraph>We are currently filtering UK Clinical Trials to find matches for each of the entries provided.</Paragraph>
      <Paragraph>This can take a few minutes so please do not refresh this page.</Paragraph>
    </Header>
  </>
);

export default Spintrials;

