import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Container } from '../../common/Layout';
import { Title } from '../../common/Typography';
import HeaderMatch from './headerMatch';
import MatchCard from './cardMatch';
import { breakpoint } from '../../../styles/globalStyles';

export default class index extends Component {
  state = {};

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  render() {
    const { windowWidth } = this.state;
    return (
      <>
        <Title>Matched trials for patient: </Title>
        <Container style={{ maxWidth: breakpoint.tablet }}>
          <HeaderMatch />
          <MatchCard windowWidth={windowWidth} />
        </Container>
      </>
    );
  }
}
