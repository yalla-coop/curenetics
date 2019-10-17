import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

import { Header } from '../../common/Layout';
import { IconButton } from '../../common/Buttons';
import { Title, Paragraph } from '../../common/Typography';
import ExportLink from '../../common/icons/ExportLink';

const { Option } = Select;

const ExportButton = styled(IconButton)`
  margin: 2rem auto;
`;

const SortSecation = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  & > div {
    min-width: 6rem;
  }
`;

const TrialDetailHeader = ({ setList }) => {
  const onChange = value => {
    setList(list => {
      const sortedList = [...list].sort((a, b) => {
        if (a[value] < b[value]) {
          return -1;
        }
        if (a[value] > b[value]) {
          return 1;
        }
        return 0;
      });
      return sortedList;
    });
  };

  return (
    <Header isCenter>
      <Title>Patient and clinical trial matches index</Title>
      <Paragraph textAlign="left">
        Below find a list of matching clinical trials. Eligibility for clinical
        trials are currently based on age, gender, cancer type, ECOG status,
        Gleason level and certain diseases within and outside the prostate.
      </Paragraph>
      <Paragraph textAlign="left">
        To export the details of all eligible trials, click the{' '}
        <strong>Export Results</strong> button below.
      </Paragraph>
      <ExportButton isCenter>
        <ExportLink />
        Export Results
      </ExportButton>
      <SortSecation>
        <Select onChange={onChange} defaultValue="sort result">
          {['age', 'gender'].map(value => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </SortSecation>
    </Header>
  );
};

export default TrialDetailHeader;
