import React from 'react';
import PatientField from './patientField';
import { PatientCard } from '../../common/Layout';
import { colors } from '../../../styles/globalStyles';
import DeleteCercle from '../../common/icons/DeleteCercle';

import {
  PatientDetailsGrid,
  ViewFileButton as AddPatient,
} from '../patientList/style';

const PatientCards = ({
  list,
  handleChange,
  renderFieldOptions,
  handleDeleteCard,
}) => {
  return list.map(patient => {
    return (
      <PatientCard key={patient.id}>
        <PatientDetailsGrid>
          <PatientField
            list={list}
            patient={patient}
            handleChange={handleChange}
            renderFieldOptions={renderFieldOptions}
          />
        </PatientDetailsGrid>
        {list.length > 1 && (
          <AddPatient
            isClear
            style={{ margin: '0 auto', color: colors.cancel }}
            onClick={handleDeleteCard(patient.id)}
          >
            <DeleteCercle></DeleteCercle>
            Delete
          </AddPatient>
        )}
      </PatientCard>
    );
  });
};

export default PatientCards;
