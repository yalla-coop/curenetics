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
export const PatientDetails = styled.section`
  margin: 1rem 0.5rem;
  padding: 1rem;
  background-color: white;
  @media only screen and (max-width: ${breakpoint.tablet}) {
    margin: 1rem 0rem;
    padding: 0.5rem;
  }
`;

export const PatientDetailsFields = styled.section`
  display: flex;
  flex-flow: column wrap;
  height: 9rem;
  @media only screen and (max-width: ${breakpoint.tablet}) {
    flex-flow: column nowrap;
    height: initial;
  }
`;

export const Main = styled.section`
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 0rem 10rem;
  }
`;

export const Field = styled.span`
  width: 9rem;
  color: ${colors.primary};
`;

export const FieldValue = styled.span`
  width: 6rem;
  font-size: 0.9rem;
`;

export const FieldFreeInput = styled.input`
  border-style: solid;
  border-color: black;
  width: 100%;
  font-size: 0.9rem;
  border-width: 0px 0px 1px 0px;
`;

export const FieldMultiOptions = styled.select`
`;

export const FieldWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* height: 34px; */
  padding-bottom: 0.3rem;
  margin-bottom: 0.2rem;
  width: 20rem;
  border-bottom: solid 1px #f4f4f9;
  @media only screen and (max-width: ${breakpoint.tablet}) {
    width: initial;
    height: initial;
    padding: 0.5rem 0rem;
  }
`;

export const ButtonEidt = styled.button`
  font-weight: 600;
  border: none;
  font-size: 0.8rem;
  background-color: white;
`;
