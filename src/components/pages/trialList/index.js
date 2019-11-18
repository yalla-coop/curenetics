import React, { Component } from 'react';
import styled from 'styled-components';
import { message } from 'antd';
import TrialDetailHeader from './TrialDetailHeader';
import CardSection from './CardSection';
import { sortList, getFilteredData } from './trialList-helpers';
import Loading from '../../common/Loading';

const CardContainer = styled.div`
  padding: 1rem;
`;

class TrialList extends Component {
  state = {
    loading: true,
    patientsInfo: [],
    formatedPatients: [],
    // trialsArr: [], //if needed
  };

  async componentDidMount() {
    const { history, location } = this.props;

    if (location.state && location.state.length > 0) {
      const [patientsInfo] = location.state;
      if (Array.isArray(patientsInfo)) {
        try {
          const {
            patientsInfo: filteredPatientsInfo,
            formatedPatients,
            // trialsArr: originalTrialsArr,
          } = await getFilteredData(patientsInfo);

          return this.setState({
            patientsInfo: filteredPatientsInfo,
            formatedPatients,
            loading: false,
            // trialsArr: originalTrialsArr,
          });
        } catch (err) {
          return message.error('something went wrong! please try again');
        }
      }
    }
    return history.push('/');
  }

  sortList = value => {
    const { patientsInfo } = this.state;
    const sortedList = sortList(patientsInfo, value);
    this.setState({ patientsInfo: sortedList });
  };

  render() {
    const { loading, patientsInfo, formatedPatients } = this.state;
    return loading ? (
      <Loading />
    ) : (
      <>
        <TrialDetailHeader
          patientsInfo={formatedPatients}
          sortList={this.sortList}
        />
        <CardContainer>
          {patientsInfo.map(patient => (
            <CardSection key={Date.now() / Math.random()} data={patient} />
          ))}
        </CardContainer>
      </>
    );
  }
}

export default TrialList;
