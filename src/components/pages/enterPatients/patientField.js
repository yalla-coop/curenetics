// this handles rendering of all patient fields
import React from 'react';
import {
  PatientFormItem,
  PatientInput,
  PatientLabel,
} from '../patientList/style';

import { mapKeyToOptions } from '../patientList/addOptionsFunc';

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

const mapKeyToPlaceHolder = {
  age: "Patient's age (in years)",
  gender: "Patient's gender",
  cancerType: "Patient's cancer type",
  fileReference: '1 to 10 letters or numbers',
  ECOGStatus: "Patient's ECOG status:",
  gleasonScore: "Patient's gleason status",
  'Disease within prostate': 'Select relevant terms',
  'Disease outside prostate': 'Select relevant terms ',
};

const notRelatedToProstateCancer = [
  'ECOGStatus',
  'gleasonScore',
  'Disease within prostate',
  'Disease outside prostate',
];

const PatientField = ({ patient, handleChange, renderFieldOptions }) => {
  const { id } = patient;

  return keysOrder.map(key => {
    let fieldType = <></>;
    if (mapKeyToOptions[key]) {
      fieldType = renderFieldOptions(
        key,
        id,
        mapKeyToOptions[key],
        patient[key],
        mapKeyToPlaceHolder[key]
      );
    } else {
      fieldType = (
        <PatientInput
          placeholder={mapKeyToPlaceHolder[key]}
          id={id + key}
          onChange={handleChange(id, key)}
          value={patient[key]}
        />
      );
    }
    return (
      <>
        {patient.cancerType.toLowerCase() !== 'prostate cancer' &&
        notRelatedToProstateCancer.includes(key) ? null : (
          <PatientFormItem key={id + key}>
            <PatientLabel style={{ width: '45%' }}>
              {mapKeyToDisplayField[key] || key}
            </PatientLabel>
            {fieldType}
          </PatientFormItem>
        )}
      </>
    );
  });
};

export default PatientField;
