import React, { Component } from 'react';
import { Container } from '../../common/Layout';
import { Title } from '../../common/Typography';
import HeaderMatch from './headerMatch';
import MatchCard from './cardMatch';
import { breakpoint } from '../../../styles/globalStyles';

export default class index extends Component {
  render() {
    return (
      <>
        <Title>Matched trials for patient: </Title>
        <Container style={{ maxWidth: breakpoint.tablet }}>
          <HeaderMatch />
          <MatchCard />
        </Container>
      </>
    );
  }
}
