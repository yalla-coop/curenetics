import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import styled from 'styled-components';
import { Select } from 'antd';

import { Header } from '../../common/Layout';
import { IconButton } from '../../common/Buttons';
import { Title, Paragraph } from '../../common/Typography';
import ExportLink from '../../common/icons/ExportLink';
// import { ExportButton } from '../matchTrial/style';

import PdfTemplate from '../../common/pdf/pdfTemplate';

const { Option } = Select;

const ExportButton = styled(IconButton)`
  margin: 2rem auto;
  & a {
    color: white;
  }
  & svg {
    margin-left: 1rem;
  }
`;

const SortSecation = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  & > div {
    min-width: 6rem;
  }
`;

class TrialListHeader extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { patientsInfo } = this.props;
    return patientsInfo !== nextProps.patientsInfo;
  }

  onChange = value => {
    const { sortList } = this.props;
    sortList(value);
  };

  render() {
    const { patientsInfo } = this.props;
    return (
      <Header isCenter>
        <Title>Patient and clinical trial matches index</Title>
        <Paragraph textAlign="left">
          Below find a list of matching clinical trials. Eligibility for
          clinical trials are currently based on age, gender, cancer type, ECOG
          status, Gleason score and certain diseases within and outside the
          prostate.
        </Paragraph>
        <Paragraph textAlign="left">
          To export the details of all eligible trials, click the{' '}
          <strong>Export Results</strong> button below.
        </Paragraph>
        <ExportButton isCenter>
          <PDFDownloadLink
            document={<PdfTemplate data={patientsInfo} type="multiple" />}
          >
            Export Results
            <ExportLink />
          </PDFDownloadLink>
        </ExportButton>
        <SortSecation>
          <Select onChange={this.onChange} defaultValue="sort result">
            {['age', 'gender'].map(value => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </SortSecation>
      </Header>
    );
  }
}

export default TrialListHeader;
