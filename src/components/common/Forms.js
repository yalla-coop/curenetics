import styled from 'styled-components';

import { cardMixin } from './Layout';
import { textMixin } from './Typography';

import {
  breakpoint, colors,
} from '../../styles/globalStyles';

// consider using material ui or similar for select / dropdowns
export const PatientForm = styled.form`
  ${cardMixin};
  padding: 2rem 1rem;
  width: 100%;
  @media only screen and (min-width: ${breakpoint.tablet}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    padding-bottom: 4rem;
  }
  @media only screen and (min-width: ${breakpoint.large}) {
    grid-gap: 2rem 4rem;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    margin-bottom: 0;
  }
`;

export const Label = styled.label`
  ${textMixin};
  margin-bottom: 0;
  color: ${colors.primary};
`;

export const Input = styled.input`
  ${textMixin};
  margin-top: 0.25rem;
  margin-bottom: 0;
  min-width: 65%;
  border: 0;
  padding: 1rem 0.25rem;
  border-bottom: 0.125rem solid ${colors.lightPrimary};
  transition: all 0.3s ease;
  &:focus {
    border-bottom-color: ${colors.accent};
    background-color: ${colors.lightAccent};
    outline: none;
  }
`;
