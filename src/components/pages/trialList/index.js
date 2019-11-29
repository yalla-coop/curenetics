import React, { Component } from 'react';
import styled from 'styled-components';
import { message } from 'antd';
import TrialDetailHeader from './TrialDetailHeader';
import CardSection from './CardSection';
import { sortList, getFilteredData } from './trialList-helpers';
import Loading from '../../common/Loading';
import SmallModal from '../../common/modal';

const CardContainer = styled.div`
  padding: 1rem;
`;

class TrialList extends Component {
  state = {
    loading: true,
    // trialsArr: [], //if needed
  };

  async componentDidMount() {
    const {
      history,
      location,
      aboutSetWarning,
      setformatedPatients,
      setfilteredPatientsInfo,
    } = this.props;
    aboutSetWarning();

    if (location.state && location.state.length > 0) {
      const [patientsInfo] = location.state;
      if (Array.isArray(patientsInfo)) {
        try {
          const {
            filteredPatientsInfo,
            formatedPatients,
            // trialsArr: originalTrialsArr,
          } = await getFilteredData(patientsInfo);
          setformatedPatients(formatedPatients);
          setfilteredPatientsInfo(filteredPatientsInfo);

          this.setState({
            loading: false,
          });
        } catch (err) {
          return message.error('something went wrong! please try again');
        }
      }
    } else if (this.props.filteredPatientsInfo[0]) {
      return this.setState({
        loading: false,
      });
    } else {
      return history.push('/');
    }
  }

  componentWillUnmount() {
    const { reset } = this.props;
    reset();
  }

  sortList = value => {
    const {
      filteredPatientsInfo: patientsInfo,
      setfilteredPatientsInfo,
    } = this.props;
    const sortedList = sortList(patientsInfo, value);
    setfilteredPatientsInfo(sortedList);
  };

  render() {
    const { loading } = this.state;
    const {
      modal,
      setModal,
      path,
      setPath,
      filteredPatientsInfo: patientsInfo,
      formatedPatients,
    } = this.props;
    return loading ? (
      <Loading />
    ) : (
      <>
        {modal && (
          <SmallModal
            modal={modal}
            setModal={setModal}
            path={path}
            setPath={setPath}
          />
        )}
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
