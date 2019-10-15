import React, { Component } from 'react';
import { Select } from 'antd';

import PatientIntro from './patientIntro';
import PatientField from './patientField';
import PatientFooter from './patientFooter';
import PatientOrginalFile from './patientOrginalFile';

import { addOptionsFunc } from './addOptionsFunc';
import { patientDummyData } from './patientDummyData';

import ExternalLink from '../../common/icons/ExternalLink';
import { PatientCard } from '../../common/Layout';
import { colors } from '../../../styles/globalStyles';

import {
  PatientlistContainer,
  PatientDetailsGrid,
  ViewFileButton,
} from './style';

// todo:
// - unique keys on PatientField
// - input focus styling -> edit to trigger focus
// - styling of select / dropdown
// - click to view original file -> results -> API call

const { Option } = Select;

class patientList extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    // format input data
    // > get options for dropdowns
    const {
      location: {
        state: { list },
      },
      filenames,
    } = this.props;
    this.setState({
      list: list ? addOptionsFunc(list) : addOptionsFunc(patientDummyData),
      medicalRecords: filenames,
    });
  }

  handleChange = (key, fileReference) => e => {
    const { list } = this.state;
    const newState = list.map(patientFields => {
      const fileReferencefound = patientFields.find(
        ({ key: keyFind }) => keyFind === 'fileReference'
      ).value;
      if (fileReferencefound === fileReference) {
        return patientFields.map(patientField => {
          if (patientField.key === key) {
            return {
              ...patientField,
              value:
                typeof e === 'string' || typeof e === 'number'
                  ? e
                  : e.target.value,
            };
          }
          return patientField;
        });
      }
      return patientFields;
    });
    this.setState({
      list: newState,
    });
  };

  handleEditButton = (key, fileReference, e) => {
    e.preventDefault();
    const { list } = this.state;
    const newState = list.map(patientFields => {
      const fileReferencefound = patientFields.find(
        ({ key: keyFind }) => keyFind === 'fileReference'
      ).value;

      if (fileReferencefound === fileReference) {
        return patientFields.map(patientField => {
          if (patientField.key === key) {
            return { ...patientField, edit: !patientField.edit };
          }
          return patientField;
        });
      }
      return patientFields;
    });

    this.setState({
      list: newState,
    });
  };

  renderFieldOptions = (key, fileReference, options, defaultValue) => (
    <Select
      htmlFor={fileReference + key}
      showSearch
      defaultValue={defaultValue}
      placeholder={key}
      optionFilterProp="children"
      onChange={this.handleChange(key, fileReference)}
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  viewOrginalFile = fileReference => () => {
    const { medicalRecords } = this.state;
    const medicalRecordFound = medicalRecords.find(({ name }) => {
      return name.split('.')[0] === fileReference;
    });
    this.setState({
      showModal: true,
      medicalRecord: medicalRecordFound,
    });
  };

  render() {
    const { list, showModal, medicalRecord } = this.state;
    const { handleEditButton, handleChange, renderFieldOptions } = this;
    return (
      <>
        <PatientOrginalFile
          showModal={showModal}
          medicalRecord={medicalRecord}
          toggleModal={this.toggleModal}
        />
        <PatientIntro />

        {list.length > 0 && (
          <PatientlistContainer>
            {list.map(patient => {
              const fileReference = patient.find(
                ({ key }) => key === 'fileReference'
              ).value;
              const { id } = patient[0];

              return (
                <PatientCard key={id}>
                  <PatientDetailsGrid>
                    {patient.map(item => (
                      <PatientField
                        key={`${item.id}-${item.key}`}
                        fileReference={fileReference}
                        patient={item}
                        handleEdit={handleEditButton}
                        handleChange={handleChange}
                        renderFieldOptions={renderFieldOptions}
                      />
                    ))}
                  </PatientDetailsGrid>
                  <ViewFileButton
                    isClear
                    onClick={this.viewOrginalFile(fileReference)}
                  >
                    <ExternalLink fill={colors.lightPrimary} width={24} />
                    Click to view original file
                  </ViewFileButton>
                </PatientCard>
              );
            })}
          </PatientlistContainer>
        )}

        <PatientFooter />
      </>
    );
  }
}

export default patientList;
