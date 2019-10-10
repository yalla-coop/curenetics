// this handles rendering of all patient fields
import React from 'react';
import {
  PatientFormItem,
  PatientInput,
  PatientLabel,
} from '../patientList/style';

export const keysOrder = [
  'fileReference',
  'age',
  'gender',
  'cancerType',
  'ECOGStatus',
  'gleasonScore',
  'Disease within prostate',
  'Disease outside prostate',
];

const mapKeyToOptions = {
  gender: ['male', 'female'],
  ECOGStatus: [0, 1, 2, 3, 4],
  'Disease within prostate': ['yes', 'no'],
  'Disease outside prostate': ['yes', 'no'],
  gleasonScore: ['3+3', '3+4', '4+3', '4+4', '9-10'],
  cancerType: ['Brain cancer', 'Skin cancer', '​Head and neck cancer'],
};

const mapKeyToDisplayField = {
  age: 'Age:',
  gender: 'Gender:',
  cancerType: 'Cancer Type:',
  fileReference: 'Your ref:',
  ECOGStatus: 'ECOG status:',
  gleasonScore: 'Gleason score:',
  'Disease within prostate': 'Disease within prostate:',
  'Disease outside prostate': 'Disease outside prostate:',
};

const PatientField = ({ patient, handleChange, renderFieldOptions }) => {
  const { id } = patient;

  return keysOrder.map(key => {
    let fieldType = <></>;
    if (mapKeyToOptions[key]) {
      fieldType = renderFieldOptions(
        key,
        id,
        mapKeyToOptions[key],
        patient[key]
      );
    } else {
      fieldType = (
        <PatientInput
          id={id + key}
          onChange={handleChange(id, key)}
          value={patient[key]}
        />
      );
    }
    return (
      <PatientFormItem key={id + key}>
        <PatientLabel>{mapKeyToDisplayField[key] || key}</PatientLabel>
        {fieldType}
      </PatientFormItem>
    );
  });
};

export default PatientField;
