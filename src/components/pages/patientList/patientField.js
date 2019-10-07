// this handles rendering of all patient fields
import React from 'react';
import { Input } from '../../common/Forms';
import { PatientFormItem, PatientLabel, EditButton, Span } from './style';

const PatientField = ({
  patient,
  fileReference,
  handleEdit,
  handleChange,
  renderFieldOptions,
}) => {
  const { key, display, edit, options, value } = patient;

  let fieldType = <></>;
  if (!edit) {
    fieldType = <Span>{value}</Span>;
  } else if (options) {
    fieldType = renderFieldOptions(key, fileReference, options, value);
  } else {
    fieldType = (
      <Input
        id={fileReference}
        onChange={handleChange(key, fileReference)}
        value={value}
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
