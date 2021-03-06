import styled from 'styled-components';

import { sectionMixin, twoColumnGrid } from '../../common/Layout';
import { FormItem, Input, Label } from '../../common/Forms';
import { Button, IconButton } from '../../common/Buttons';
import { textMixin, fontImport } from '../../common/Typography';
import {
  breakpoint,
  colors,
  font,
  fontFamily,
} from '../../../styles/globalStyles';

export const PatientlistContainer = styled.div`
  ${sectionMixin};
  @media only screen and (max-width: ${breakpoint.tablet}) {
    padding: 0px;
  }
`;

export const MatchButton = styled(Button)`
  display: block;
  margin: 2rem auto;
`;

export const ViewFileButton = styled(IconButton)`
  color: ${colors.lightPrimary};
  &:hover {
    fill: ${colors.lightPrimary};
  }
  padding: 0.8rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    padding: 0.8rem;
    font-size: ${font.small};
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 0.8rem;
  }
`;

// form
export const PatientDetailsGrid = styled.form`
  ${twoColumnGrid};
  padding-left: 0;
  padding-right: 0;
  @media only screen and (min-width: ${breakpoint.large}) {
    grid-gap: 1rem 1rem;
  }
`;

// form fields
export const PatientFormItem = styled(FormItem)`
  padding-bottom: 0.5rem;
  border-bottom: 0.125rem solid;
  border-bottom-color: ${({ edit }) =>
    edit ? colors.accent : colors.background};

  /* dropdown */
  .ant-select {
    ${fontImport};
    ${textMixin};
    margin: 0;
    font-family: ${fontFamily.body};
  }
  .ant-select-focused {
    box-shadow: none;
  }
  .ant-select-selection--single {
    height: auto;
  }
  .ant-select-selection {
    border: 0;
    border-radius: 0;
  }
  .ant-select-selection__rendered {
    /* padding: 0.5rem 0.25rem; */
  }
  .ant-select-arrow-icon {
    font-size: 20px;
    color: ${colors.primary};
  }
  @media only screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0rem;
  }
`;

export const PatientInput = styled(Input)`
  background-color: ${colors.background};
  /* width: 0rem; */
  padding: 0.5rem 0.25rem;
  max-width: 0px;
  @media only screen and (max-width: ${breakpoint.tablet}) {
    width: 100%;
    min-width: initial;
    padding: 0px;
    max-width: 100%;
  }
`;

export const PatientLabel = styled(Label)`
  color: ${({ edit }) => (edit ? colors.accent : colors.primary)};
  margin-right: 0.8rem;
`;

export const EditButton = styled(Button)`
  visibility: ${({ hide }) => (hide ? 'hidden' : 'visible')}
  padding: 0.1rem;
  margin: 0.1rem;
  color: ${colors.lightPrimary};
  &:hover {
    color: ${colors.primary};
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    font-size: ${font.small};
    padding: 0.8rem;
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 0.8rem;
  }
`;
