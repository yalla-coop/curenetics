import React from 'react';
import styled from 'styled-components';
import formFields from './formFields';

import Chevron from '../../common/icons/Chevron';
import Plus from '../../common/icons/Plus';

import { BacklinkContainer, sectionMixin, Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import { PatientForm, FormItem, Label, Input } from '../../common/Forms';
import { BackLink, Button, IconButton } from '../../common/Buttons';

import { breakpoint } from '../../../styles/globalStyles';

const ContentContainer = styled.div`
  ${sectionMixin};
  @media only screen and (min-width: ${breakpoint.tablet}) {
    display: flex;
  }
`;

const ButtonContainer = styled.div`
  ${sectionMixin};
  text-align: center;
  > :nth-child(1) {
    margin-bottom: 2rem;
  }
`;

// default form fields:
const inputFields = ['ref', 'age', 'gender', 'cancer', 'ecog', 'gleason'];

const dropdownFields = ['inside_prostate', 'outside_prostate'];

const Enter = () => {
  // moving forward:

  // 1. want to append an item to the patients array, not overwrite
  // > don't want to re-render whole list each time an item is added
  // > this will be an array of objects

  // const [patients, addPatient] = useState([blank object]);
  // addPatient = Object.assign([blank object with properties], patients)

  // 2. consider using material ui etc - select is impossible to style

  return (
    <>
      <BacklinkContainer>
        <BackLink to="/">
          <Chevron width={20} />
        </BackLink>
      </BacklinkContainer>

      <Header>
        <Title>Enter patient data</Title>
        <Paragraph>
          Please enter the relevant medical details for each of patients below.
          We can currently match clinical trials for you based on age, gender,
          cancer type, ECOG status, Gleason level and certain diseases within
          and outside the prostate.
        </Paragraph>
      </Header>

      <ContentContainer>
        <PatientForm>
          {inputFields.map(input => {
            const info = formFields.inputs[input];
            return (
              <FormItem key={info.id}>
                <Label htmlFor={info.label}>{info.label}:</Label>
                <Input
                  type="text"
                  id={info.label}
                  placeholder={info.placeholder}
                />
              </FormItem>
            );
          })}
          {dropdownFields.map(dropdown => {
            const info = formFields.dropdowns[dropdown];
            return (
              <FormItem key={info.id}>
                <Label htmlFor={info.label}>{info.label}:</Label>
                <select type="text" id={info.label}>
                  <option value="">{info.placeholder}</option>
                </select>
              </FormItem>
            );
          })}
        </PatientForm>
      </ContentContainer>

      <ButtonContainer>
        <IconButton isClear isCenter>
          <Plus addOutine />
          Click to add another patient’s medical details
        </IconButton>
        <Button>Find Clinical Trials</Button>
      </ButtonContainer>
    </>
  );
};

export default Enter;
