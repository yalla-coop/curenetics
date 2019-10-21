import React from "react";
import styled from "styled-components";
import { PDFDownload, PDFDownloadLink } from '@react-pdf/renderer';
import { Select } from "antd";

import { Header } from "../../common/Layout";
import { IconButton } from "../../common/Buttons";
import { Title, Paragraph } from "../../common/Typography";
import PdfTemplate from '../../common/pdf/pdfTemplate';
import {matchData} from '../matchTrial/dummyData';
import ExportLink from "../../common/icons/ExportLink";

const { Option } = Select;

const ExportButton = styled(IconButton)`
    color: white;
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

const TrialListHeader = ({ sortList, listAll }) => {
	const onChange = value => {
		sortList(value);
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
				To export the details of all eligible trials, click the{" "}
				<strong>Export Results</strong> button below.
			</Paragraph>
			<ExportButton isCenter>
			 <PDFDownloadLink document={<PdfTemplate data={ matchData } />}>
			  {({loading}) => (loading ? 'Export' : 'Export Results')}
			 </PDFDownloadLink>
				{/* <ExportLink /> */}
			</ExportButton>
			<SortSecation>
				<Select onChange={onChange} defaultValue="sort result">
					{["age", "gender"].map(value => (
						<Option key={value} value={value}>
							{value}
						</Option>
					))}
				</Select>
			</SortSecation>
		</Header>
	);
};

export default TrialListHeader;
