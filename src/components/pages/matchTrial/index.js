import React, { Component } from 'react';
import { Container } from '../../common/Layout';
import { Title } from '../../common/Typography';
import HeaderMatch from './headerMatch';
import MatchCard from './cardMatch';
import { breakpoint } from '../../../styles/globalStyles';
import { matchData } from './dummyData';

export default class index extends Component {
  state = {};

  componentDidMount() {
    this.setState({
      list: matchData,
    });
  }

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <>
        <Title>Matched trials for patient: </Title>
        <Container style={{ maxWidth: breakpoint.tablet }}>
          <HeaderMatch />
          {list &&
            list.map(trial => {
              return <MatchCard key={trial.id} trial={trial} />;
            })}
        </Container>
      </>
    );
  }
}
