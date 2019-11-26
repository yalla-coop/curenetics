import React, { Component } from 'react';
import { Spin } from 'antd';
import styled from 'styled-components';

import { filterByEligibility } from '../../../helpers/eligibility';

import HeaderMatch from './headerMatch';
import MatchCard from './cardMatch';

import { breakpoint } from '../../../styles/globalStyles';

import { HeaderContainer, Header, Container } from '../../common/Layout';
import { Title } from '../../common/Typography';
import { BackLink } from '../../common/Buttons';
import Chevron from '../../common/icons/Chevron';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50vh;
`;

const centerP = {
  margin: '0 auto',
};

export default class index extends Component {
  state = {
    loading: true,
    // patientsInfo: {},
  };

  async componentDidMount() {
    const { location, history } = this.props;

    if (location.state && location.state.length > 0) {
      // this is just a temp solution for long time rendering
      await Promise.all([
        location.state,
        new Promise(res => setTimeout(res, 500)),
      ]);
      this.setState({
        // patientsInfo: location.state[0],
        loading: false,
      });
    } else {
      history.push('/');
    }
  }

  render() {
    const {
      location: { state },
    } = this.props;
    const { loading /* , patientsInfo */ } = this.state;
    // const {
    //  patientsInfo: state[0],
    //  patientsInfo: { matchedTrials },
    // } = state;
    const patientsInfo = state[0];
    const { matchedTrials } = patientsInfo;

    return loading ? (
      <LoadingContainer>
        <Spin tip="Loading..." size="large" />
      </LoadingContainer>
    ) : (
      <>
        <Header>
          <HeaderContainer>
            <BackLink to="/trial-list">
              <Chevron width={20} />
            </BackLink>
            <Title style={centerP}>Matched trials for patient: </Title>
          </HeaderContainer>
        </Header>
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
