// this handles rendering of all patient fields
import React from 'react';
import {
  PatientFormItem,
  PatientInput,
  PatientLabel,
  EditButton,
} from './style';

import { Span } from '../../common/Typography';

const PatientField = ({
  patient,
  fileReference,
  handleEdit,
  handleChange,
  renderFieldOptions,
}) => {
  const { key, display, edit, options, value } = patient;

  let fieldType = <></>;
  if (!edit || key === 'fileReference') {
    fieldType = <Span>{value}</Span>;
  } else if (options) {
    fieldType = renderFieldOptions(key, fileReference, options, value);
  } else {
    fieldType = (
      <PatientInput
        id={fileReference}
        onChange={handleChange(key, fileReference)}
        value={value}
        type={key === 'age' ? 'number' : 'text'}
        min="1"
      />
    );
  }

  return (
    <PatientFormItem edit={edit} key={fileReference}>
      <PatientLabel edit={edit} htmlFor={fileReference}>
        {display || key}
      </PatientLabel>
      {fieldType}
      <EditButton
        isClear
        hide={key === 'fileReference'}
        edit={edit}
        aria-label={`edit ${display || key} field`}
        onClick={e => handleEdit(key, fileReference, e)}
      >
        {edit ? 'save' : 'edit'}
      </EditButton>
    </PatientFormItem>
  );
};

export default PatientField;
