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
    patientsInfo: [],
    formatedPatients: [],
    // trialsArr: [], //if needed
  };

  async componentDidMount() {
    const { history, location, aboutSetWarning } = this.props;
    aboutSetWarning();

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

  componentWillUnmount() {
    const { reset } = this.props;
    reset();
  }

  sortList = value => {
    const { patientsInfo } = this.state;
    const sortedList = sortList(patientsInfo, value);
    this.setState({ patientsInfo: sortedList });
  };

  render() {
    const { modal, setModal, path, setPath } = this.props;
    const { loading, patientsInfo, formatedPatients } = this.state;
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
            <CardSection key={patient.fileReference} data={patient} />
          ))}
        </CardContainer>
      </>
    );
  }
}

export default TrialList;
