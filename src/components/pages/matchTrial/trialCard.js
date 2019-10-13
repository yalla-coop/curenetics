import React from 'react';
import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';

import PdfTemplate from '../../common/pdf/pdfTemplate';
import ExportLink from '../../common/icons/ExportLink';

import { PatientCard } from '../../common/Layout';
import { breakpoint, colors } from '../../../styles/globalStyles';
import { buttonBase, purpleButton } from '../../common/Buttons';

const Result = styled(PatientCard)`
  color: ${props => (props.isPotential ? colors.confirm : colors.accent)};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PdfButton = styled(PDFDownloadLink)`
  ${buttonBase};
  ${purpleButton};
  margin-top: 2rem;
  > svg {
    margin-left: 1rem;
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    max-width: 300px;
    padding: 0.8rem 1.6rem;
    align-self: flex-end;
  }
`;

export const TrialCard = ({ data, isPotential }) => (
  <Result isPotential={isPotential}>
    Trial Details to go here... (color derived from trial data props)
    <PdfButton document={<PdfTemplate data={data} isPotential={isPotential} />}>
      Export Trial to PDF <ExportLink />
    </PdfButton>
  </Result>
);