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
  @media only screen and (max-width: ${breakpoint.tablet}) {
    flex-flow: column nowrap;
    height: initial;
  }
`;

export const Main = styled.section`
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: initial;
  }
  @media only screen and (min-width: ${breakpoint.large}) {
    padding: 0rem 4rem;
  }
  @media only screen and (min-width: ${breakpoint.large}) {
    padding: 0rem 11rem;
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
  /* border-style: solid; */
  /* border-color: black; */
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
  /* height: 34px; */
  padding-bottom: 0.4rem;
  margin-bottom: 0.3rem;
  width: 20rem;
  border-bottom: solid 1px ${({ edit }) => (edit ? colors.accent : '#f4f4f9')};
  @media only screen and (max-width: ${breakpoint.large}) {
    width: 50%;
  }
  @media only screen and (max-width: ${breakpoint.tablet}) {
    width: initial;
    height: initial;
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
