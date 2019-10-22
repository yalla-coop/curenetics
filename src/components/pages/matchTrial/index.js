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
  state = {
    loading: true,
    list: [],
    patientsInfo: {},
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.state && location.state.length > 0) {
      this.setState({
        loading: false,
        list: matchData,
        patientsInfo: location.state[0],
      });
    }
    /**
     * Export all trials to PDF will not work without setTimeout
     */
    setTimeout(() => {
      this.setState({
        wait: true,
      });
    }, 500);
  }

  render() {
    const { loading, patientsInfo, wait } = this.state;
    const { matchedTrials = {} } = patientsInfo;

    return loading ? (
      <h1>LOADING...</h1>
    ) : (
      <>
        <BacklinkContainer>
          <BackLink to="/">
            <Chevron width={20} />
          </BackLink>
        </BacklinkContainer>
        <Title>Matched trials for patient: </Title>
        <Container style={{ maxWidth: breakpoint.tablet }}>
          <HeaderMatch patientsInfo={patientsInfo} wait={wait} />
          {matchedTrials.data.map(trial => {
            return (
              <MatchCard
                key={trial.IDInfo.NCTID + Date.now()}
                trial={trial}
                patientsInfo={patientsInfo}
                isPotential={trial.eligibilityStatus === 'potential'}
              />
            );
          })}
        </Container>
      </>
    );
  }
}
