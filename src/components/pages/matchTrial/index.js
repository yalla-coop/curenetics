import React, { Component } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

import { filterByEligibility } from '../../../helpers/eligibility';

import HeaderMatch from './headerMatch';
import MatchCard from './cardMatch';

import { breakpoint } from '../../../styles/globalStyles';

import { BacklinkContainer, Container } from '../../common/Layout';
import { Title } from '../../common/Typography';
import { BackLink } from '../../common/Buttons';
import Chevron from '../../common/icons/Chevron';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50vh;
`;

export default class index extends Component {
  state = {
    loading: true,
    patientsInfo: {},
  };

  componentDidMount() {
    const { location, history } = this.props;

    if (location.state && location.state.length > 0) {
      return this.setState({
        patientsInfo: location.state[0],
        loading: false,
      });
    }

    return history.push('/');

    /**
     * Export all trials to PDF will not work without setTimeout
     */
    // setTimeout(() => {
    //   this.setState({
    //     wait: true,
    //   });
    // }, 500);
  }

  render() {
    const { loading, patientsInfo } = this.state;
    const { matchedTrials } = patientsInfo;

    return loading ? (
      <LoadingContainer>
        <Spin tip="Loading..." size="large" />
      </LoadingContainer>
    ) : (
      <>
        <BacklinkContainer>
          <BackLink to="/">
            <Chevron width={20} />
          </BackLink>
        </BacklinkContainer>
        <Title>Matched trials for patient: </Title>
        <Container style={{ maxWidth: breakpoint.tablet }}>
          <HeaderMatch patientsInfo={patientsInfo} />
          {filterByEligibility(matchedTrials.data).map(trial => {
            return (
              <MatchCard
                key={trial.IDInfo.NCTID + Date.now()}
                trial={trial}
                patientsInfo={patientsInfo}
              />
            );
          })}
        </Container>
      </>
    );
  }
}
