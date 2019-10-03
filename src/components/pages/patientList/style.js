import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { columnMixin } from '../../common/Layout';
import { buttonReset, buttonMixin } from '../../common/Buttons';
import { breakpoint, colors } from '../../../styles/globalStyles';

export const MatchClinical = styled(Link)`
  ${buttonReset};
  ${buttonMixin};
  ${columnMixin};
  display: block;
  cursor: pointer;
  text-align: center;
  color: ${colors.white} !important;
  &:hover {
    color: ${colors.white};
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-bottom: 1rem;
    color: #fff;
  }
`;
export const OrignalFileLink = styled.span`
  color: ${colors.lightPrimary};
`;
export const PatientDetails = styled.div`
  margin: 1rem 0.5rem;
  padding: 1rem;
  background-color: white;
  @media only screen and (max-width: ${breakpoint.tablet}) {
    margin: 1rem 0rem;
    padding: 0.5rem;
  }
`;

export const PatientDetailsFields = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 9.8rem;
  @media only screen and (max-width: ${breakpoint.large}) {
    flex-flow: column nowrap;
    height: initial;
  }
`;

export const Field = styled.label`
  width: 9rem;
  color: ${({ edit }) => (edit ? colors.accent : colors.primary)};
`;

export const FieldValue = styled.span`
  width: 6rem;
  font-size: 0.9rem;
`;

export const FieldFreeInput = styled.input`
  width: 100%;
  font-size: 0.9rem;
  border-width: 0px 0px 0px 0px;
`;

export const FieldMultiOptions = styled.select`
`;

export const FieldWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 0.4rem;
  margin-bottom: 0.3rem;
  border-bottom: solid 1px ${({ edit }) => (edit ? colors.accent : '#f4f4f9')};
  width: 49%;
  @media only screen and (max-width: ${breakpoint.large}) {
    width: initial;
    height: initial;
  }
  @media only screen and (max-width: ${breakpoint.tablet}) {
    padding: 0.5rem 0rem;
  }
`;

export const ButtonEidt = styled.button`
  font-weight: 600;
  border: none;
  color: ${({ edit }) => (edit ? colors.accent : 'initial')};
  font-size: 0.8rem;
  background-color: white;
`;
