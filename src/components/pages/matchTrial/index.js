import React, { Component } from 'react';

import HeaderMatch from './headerMatch';
import MatchCard from './cardMatch';

import { breakpoint } from '../../../styles/globalStyles';

import { matchData } from './dummyData';

import { BacklinkContainer, Container } from '../../common/Layout';
import { Title } from '../../common/Typography';
import { BackLink } from '../../common/Buttons';
import Chevron from '../../common/icons/Chevron';

// isPotential determines green or orange colour
// - this comes from dummyData.js (and actual data when we get there)
export default class index extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      list: matchData,
    });
  }

  render() {
    const { list } = this.state;
    return (
      <>
        <BacklinkContainer>
          <BackLink to="/">
            <Chevron width={20} />
          </BackLink>
        </BacklinkContainer>
        <Title>Matched trials for patient: </Title>
        <Container style={{ maxWidth: breakpoint.tablet }}>
          <HeaderMatch />
          {list &&
            list.map(trial => {
              return (
                <MatchCard
                  key={trial.id}
                  trial={trial}
                  isPotential={trial.eligibilityStatus === 'potential'}
                />
              );
            })}
        </Container>
      </>
    );
  }
}
