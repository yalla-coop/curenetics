import React, { Component } from 'react';
import { Select } from 'antd';
import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import ExternalLink from '../../common/icons/ExternalLink.jsx';
import * as S from './style';
import { colors } from '../../../styles/globalStyles';

const { Option } = Select;

const keysOrder = ['fileReference', 'age', 'gender', 'postcode', 'canserType', 'ECOGStatus', 'gleasonScore', 'Keywords'];

const dummyData = [
  {
    fileReference: 123,
    age: 15,
    gender: 'male',
    postcode: 'E5 6TT',
    canserType: 'Brain cancer',
    ECOGStatus: '0',
    gleasonScore: '3+3',
    Keywords: ['disease within prostate', 'focal disease'],
  }, {
    fileReference: 1235,
    age: 15,
    gender: 'female',
    postcode: 'E5 6TT',
    canserType: 'Brain cancer',
    ECOGStatus: '0',
    gleasonScore: '3+3',
    Keywords: ['disease outside prostate', 'metastatic disease', 'advanced disease'],
  }, {
    fileReference: 123,
    postcode: 'E5 6TT',
    canserType: 'Brain cancer',
    ECOGStatus: '0',
    gleasonScore: '3+3',
    Keywords: ['disease within prostate', 'focal disease'],
  },
];

const mapKeyToOptions = {
  gender: ['male', 'female'],
  ECOGStatus: [0, 1, 2, 3, 4],
  'Disease in prostate': ['yes', 'no'],
  'Disease outside prostate': ['yes', 'no'],
  gleasonScore: ['3+3', '3+4', '4+3', '4+4', '9-10'],
  canserType: ['Brain cancer', 'Skin cancer', '​Head and neck cancer'],
};

const mapKeyToDisplayField = {
  cancerType: 'Type of cancers',
  fileReference: 'File name',
  ECOGStatus: 'ECOG status',
  gleasonScore: 'Gleason score',
};

export default class trialList extends Component {
  state = {
    list: [],
  }

  componentDidMount() {
    const list = dummyData.map((object) => keysOrder.reduce((acc, key) => {
      if (key === 'Keywords') {
        return acc.concat([
          {
            key: 'Disease in prostate',
            value: object[key].includes(...['disease within prostate', 'focal disease']) ? 'yes' : 'no',
            edit: false,
            options: mapKeyToOptions['Disease in prostate'],
            display: mapKeyToDisplayField['Disease in prostate'],
          }, {
            key: 'Disease outside prostate',
            value: object[key].includes(['disease outside prostate', 'metastatic disease', 'advanced disease']) ? 'yes' : 'no',
            edit: false,
            options: mapKeyToOptions['Disease outside prostate'],
            display: mapKeyToDisplayField['Disease outside prostate'],
          },
        ]);
      }

      return acc.concat({
        key,
        value: object[key] || 'Data not found',
        edit: false,
        options: mapKeyToOptions[key],
        display: mapKeyToDisplayField[key],
      });
    }, []));
    this.setState({
      list,
    });
  }

  handleChange = (key, fileReference) => (e) => {
    const list = this.state.list.map((patientFields) => {
      const fileReferencefound = patientFields.find(({ key: keyFind }) => keyFind === 'fileReference').value;
      if (fileReferencefound === fileReference) {
        return patientFields.map((patientField) => {
          if (patientField.key === key) {
            return { ...patientField, value: typeof e === 'string' || typeof e === 'number' ? e : e.target.value };
          }
          return patientField;
        });
      }
      return patientFields;
    });
    this.setState({
      list,
    });
  }

  renderField = (patient, fileReference) => patient.map(({
    key, display, edit, options, value,
  }) => {
    let filedType = <></>;
    if (!edit) {
      filedType = <S.FieldValue>{value}</S.FieldValue>;
    } else if (options) {
      filedType = this.renderFieldOptions(key, fileReference, options, value);
    } else {
      filedType = <S.FieldFreeInput
        onChange={this.handleChange(key, fileReference)}
        value={value} />;
    }

    return (
      <S.FieldWrapper key={key}>
        <S.Field>{display || key}</S.Field>
        <section style={{ width: '6rem', height: '1.2rem' }}>
          {filedType}
        </section>
        <S.ButtonEidt onClick={this.handleEditButton(key, fileReference)}>{edit ? 'save' : 'edit'}</S.ButtonEidt>
      </S.FieldWrapper>
    );
  })

  handleEditButton = (key, fileReference) => () => {
    const list = this.state.list.map((patientFields) => {
      const fileReferencefound = patientFields.find(({ key: keyFind }) => keyFind === 'fileReference').value;
      if (fileReferencefound === fileReference) {
        return patientFields.map((patientField) => {
          if (patientField.key === key) {
            return { ...patientField, edit: !patientField.edit };
          }
          return patientField;
        });
      }
      return patientFields;
    });
    this.setState({
      list,
    });
  }

  renderFieldOptions = (key, fileReference, options, defaultValue) => <Select
    showSearch
    defaultValue={defaultValue}
    placeholder={key}
    optionFilterProp="children"
    onChange={this.handleChange(key, fileReference)}
    filterOption={(inp, opt) => opt.props.children.toLowerCase().indexOf(inp.toLowerCase()) >= 0}
  >
    {options.map((value, index) => <Option key={Date.now() + index} value={value}>{value}</Option>)}
  </Select>

  render() {
    return (
      <>
        <S.Main>
          <Header>
            <Title>Edit patient data</Title>
            <Paragraph>
              Your key data has been analysed and returned to identify
              the key medical criteria to help filter clinical trials.
              We can currently match clinical trials for you based on age,
              gender, cancer type and specific medical terms for each condition.
            </Paragraph>
            <Paragraph>
              Please check below and select edit to change any data that is incorrect.
              When you’re ready select Find Clinical Trials
            </Paragraph>
          </Header>
          <section >
            <S.MatchClinical href="#">Match Clinical Trials</S.MatchClinical>
          </section>
          <section>
            {this.state.list.map((patient) => {
              const fileReference = patient.find(({ key }) => key === 'fileReference').value;
              return (
                <>
                  <S.PatientDetails>
                    <S.PatientDetailsFields>
                      {this.renderField(patient, fileReference)}
                    </S.PatientDetailsFields>
                    <S.OrignalFileLink><ExternalLink fill={colors.lightPrimary} width="1.5rem" /> Click to view original file</S.OrignalFileLink>
                  </S.PatientDetails>
                </>
              );
            })}
          </section>
          <section >
            <S.MatchClinical>Match Clinical Trials</S.MatchClinical>
          </section>
        </S.Main>
      </>
    );
  }
}
