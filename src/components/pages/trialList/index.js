import React, { Component } from 'react';
import axios from 'axios';
import { Spin, message } from 'antd';
import styled from 'styled-components';
import {
  filterByOverallStatus,
  filterByAllCriteria,
} from '../../../helpers/filter';
import { TRIAL_API } from '../../../constants/urls';
// import result from '../../../dummydata/Results-12-10-19.json';
import TrialDetailHeader from './TrialDetailHeader';
import CardSection from './CardSection';

const CardContainer = styled.div`
  padding: 1rem;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50vh;
`;

class TrialList extends Component {
  state = {
    loading: true,
    patientsInfo: [],
    trialsArr: [],
  };

  async componentDidMount() {
    const { history, location } = this.props;

    if (location.state && location.state.length > 0) {
      const [patientsInfo] = location.state;
      if (Array.isArray(patientsInfo)) {
        const trialsArr = await this.getTrials();

        patientsInfo.forEach(patient => {
          const matchedTrials = filterByAllCriteria(trialsArr, patient);
          // eslint-disable-next-line no-param-reassign
          patient.matchedTrials = matchedTrials;
        });

        return this.setState({ patientsInfo, trialsArr, loading: false });
      }
    }
    return history.push('/');
  }

  getTrials = async () => {
    try {
      // // this is just for test
      // const { results } = result;

      const {
        data: { results },
      } = await axios.get(TRIAL_API);

      // filter for recruiting and unknown status
      return filterByOverallStatus(results);
    } catch (err) {
      return message.error('something went wrong! please try again');
    }
  };

  sortList = value => {
    const { patientsInfo } = this.state;
    const sortedList = [...patientsInfo].sort((a, b) => {
      if (a[value] < b[value]) {
        return -1;
      }
      if (a[value] > b[value]) {
        return 1;
      }
      return 0;
    });
    this.setState({ patientsInfo: sortedList });
  };

  render() {
    const { loading, patientsInfo } = this.state;
    return loading ? (
      <LoadingContainer>
        <Spin tip="Loading..." size="large" />
      </LoadingContainer>
    ) : (
      <>
        <TrialDetailHeader sortList={this.sortList} />
        <CardContainer>
          {patientsInfo.map(patient => (
            <CardSection key={patient.fileReference} data={patient} />
          ))}
        </CardContainer>
      </>
    );
  }
}

export default TrialList;
