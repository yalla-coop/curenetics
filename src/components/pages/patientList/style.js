import styled from 'styled-components';

import { sectionMixin, twoColumnGrid } from '../../common/Layout';
import { FormItem, Label } from '../../common/Forms';
import { Button, IconButton } from '../../common/Buttons';
import { textMixin, fontImport } from '../../common/Typography';
import { breakpoint, colors, font, fontFamily } from '../../../styles/globalStyles';

export const PatientlistContainer = styled.div`
  ${sectionMixin};
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
`;

// form fields
export const PatientFormItem = styled(FormItem)`
  padding-bottom: 1rem;
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
    padding: 0.5rem 0.25rem;
  }

  /* sits at the same level as bundle files  */
  /* .ant-select-open .ant-select-selection {
    background-color: ${colors.lightAccent};
    border-color: ${colors.accent};
    box-shadow: none;
  }
  .ant-select-dropdown-menu {
    font-family: ${fontFamily.body};
  }
  .ant-select-dropdown-menu-item {
    padding: 0.5rem 1rem;
  }
  .ant-select-dropdown-menu-item-active {
    background-color: ${colors.lightAccent};
  } */
`;

export const PatientLabel = styled(Label)`
  color: ${({ edit }) => (edit ? colors.accent : colors.primary)};
  margin-right: 0.8rem;
`;

export const EditButton = styled(Button)`
  padding: 0.8rem;
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

export const Span = styled.span`
  ${textMixin};
  margin: 0;
`;
