import React, { Component } from 'react';
import { Select } from 'antd';

import SmallModal from '../../common/modal';
import PatientIntro from './patientIntro';
import { keysOrder } from './patientField';
import PatientCards from './PatientCards';

import { colors } from '../../../styles/globalStyles';

import AddCercle from '../../common/icons/AddCercle';

import {
  MatchButton,
  PatientlistContainer,
  ViewFileButton,
} from '../patientList/style';

const { Option } = Select;

class EnterPatients extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.createPatient();
    this.props.aboutSetWarning();
  }

  componentWillUnmount() {
    this.props.reset();
  }

  createPatient = () => {
    const empty = keysOrder.reduce((result, item) => {
      return { ...result, [item]: '' };
    }, {});
    empty.id = Date.now() / Math.random();
    this.setState(({ list }) => ({
      list: [...list, empty],
    }));
  };

  handleChange = (id, key) => e => {
    const { list } = this.state;
    const newState = list.map(patientFields => {
      if (patientFields.id === id) {
        const newPatientFields = {
          ...patientFields,
          [key]:
            typeof e === 'string' || typeof e === 'number' ? e : e.target.value,
        };
        return newPatientFields;
      }
      return patientFields;
    });
    this.setState({
      list: newState,
    });
  };

  handleDeleteCard = idDelete => () => {
    this.setState(({ list }) => ({
      list: list.filter(({ id }) => {
        return id !== idDelete;
      }),
    }));
  };

  renderFieldOptions = (key, id, options, defaultValue, placeholder) => (
    <Select
      htmlFor={id}
      showSearch
      placeholder={placeholder}
      optionFilterProp="children"
      onChange={this.handleChange(id, key)}
      filterOption={(inp, opt) =>
        opt.props.children.toLowerCase().indexOf(inp.toLowerCase()) >= 0
      }
    >
      {options.map(value => (
        <Option key={value} value={value}>
          {value}
        </Option>
      ))}
    </Select>
  );

  moveDataToBeFiltered = () => {
    const { list } = this.state;
    const { history } = this.props;
    history.push('/trial-list', [list]);
  };

  render() {
    const { modal, setModal, path, setPath } = this.props;
    const {
      renderFieldOptions,
      handleChange,
      handleDeleteCard,
      moveDataToBeFiltered,
    } = this;
    const { list } = this.state;
    return (
      <>
        {modal && (
          <SmallModal
            modal={modal}
            setModal={setModal}
            path={path}
            setPath={setPath}
          />
        )}
        <PatientIntro></PatientIntro>
        <PatientlistContainer>
          <PatientCards
            list={list}
            renderFieldOptions={renderFieldOptions}
            handleChange={handleChange}
            handleDeleteCard={handleDeleteCard}
          />
        </PatientlistContainer>
        <ViewFileButton
          style={{ margin: '0px auto' }}
          onClick={this.createPatient}
          isClear
        >
          <AddCercle fill={colors.lightPrimary} width={24} />
          Click to add another patient’s medical details
        </ViewFileButton>
        <MatchButton onClick={moveDataToBeFiltered}>
          Find Clinical Trials
        </MatchButton>
      </>
    );
  }
}

export default EnterPatients;
