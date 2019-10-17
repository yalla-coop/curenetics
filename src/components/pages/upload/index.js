import React, { createRef } from "react";
import styled from "styled-components";
import Tooltip from "./tooltip";
import Modual from "./modal";

import InputBox from "./input";
import Item from "./listItem";
import { CardHeader, CardContent, DottedBox, Span } from "./uploadStyles";
import filenameCheck from "../../../helpers";

import Chevron from "../../common/icons/Chevron";
import Plus from "../../common/icons/Plus";
import patientdata from "../../../dummydata/patientdata.json";

import {
	BacklinkContainer,
	sectionMixin,
	Header,
	columnMixin,
	Article,
	UploadCard
} from "../../common/Layout";
import { Title, SubHeading, OL, LI } from "../../common/Typography";
import { BackLink, IconButton, Button } from "../../common/Buttons";

import { breakpoint, colors } from "../../../styles/globalStyles";

const ContentContainer = styled.div`
	${sectionMixin};
	@media only screen and (min-width: ${breakpoint.tablet}) {
		display: flex;
	}
`;

const UploadColumn = styled.div`
	${columnMixin};
	margin-top: 1rem;
	@media only screen and (min-width: ${breakpoint.small}) {
		margin-top: 0;
		margin-left: 1rem;
	}
`;

const AddFiles = styled(SubHeading)`
	color: ${colors.black};
	font-weight: 400;
`;

const AddFileButton = styled(IconButton)`
	width: 4rem;
	height: 4rem;
	margin: 0;
	padding: 0.5rem;
	border-radius: 2rem;
	@media only screen and (min-width: ${breakpoint.small}) {
		max-width: 4rem;
		margin: 0;
		padding: 0.5rem;
		border-radius: 2rem;
	}
	@media only screen and (min-width: ${breakpoint.tablet}) {
		padding: 0.5rem;
	}
	svg {
		margin-right: 0;
	}
`;

const UploadButton = styled(Button)`
	width: 100%;
	max-width: 300px;
	margin: 0 auto;
	display: block;
	&:disabled {
		background-color: ${colors.disabled};
	}
	@media only screen and (min-width: ${breakpoint.small}) {
		max-width: 300px;
	}
	@media (min-width: ${breakpoint.tablet}) {
		max-width: 100%;
	}
`;

const Upload = props => {
	const { filenames, setFilenames } = props;
	const inputRef = createRef();
	const onButtonClick = () => {
		inputRef.current.click();
	};
	const selectFiles = e => {
		// files are saved to state
		e.stopPropagation();
		e.preventDefault();
		setFilenames(Array.from(e.target.files));
	};
	const removeFile = e => {
		// files are removed (from screen & state) if red cross is clicked
		const fileStr = e.target.parentNode.textContent;
		const newFileArr = filenames.filter(file => file.name !== fileStr);
		setFilenames(newFileArr);
	};
	const closeModule = e => {
		const parentObj = e.target.parentNode;
		parentObj.parentNode.parentNode.style.display = "none";
	};
	return (
		<>
			<Modual onClick={closeModule} />
			<BacklinkContainer>
				<BackLink to="/">
					<Chevron width={20} />
				</BackLink>
			</BacklinkContainer>

			<Header>
				<Title>Add your PDF files</Title>
			</Header>
			<ContentContainer hasColumns>
				<Article isLeft>
					<SubHeading>What to do:</SubHeading>
					<OL>
						<LI>
							Click on the Add your files button to select patients file(s).
							Only PDF files can be selected.
						</LI>
						<LI>Delete any file at any time</LI>
						<LI>When you’re ready click the Upload button to upload files.</LI>
					</OL>
				</Article>

				<UploadColumn>
					<UploadCard>
						<CardHeader>
							<InputBox onChange={selectFiles} ref={inputRef} />
							<AddFileButton
								onClick={() => onButtonClick()}
								aria-label="Upload PDF"
							>
								<Plus fill={colors.white} width={48} />
							</AddFileButton>
							<CardContent>
								<AddFiles>Add your files</AddFiles>
								<Tooltip />
							</CardContent>
						</CardHeader>

						<DottedBox>
							{filenames.length ? (
								filenames.map(file => {
									const bgcolor = file.name.endsWith(".pdf") ? "yes" : "No";
									return (
										<Item
											bg={bgcolor}
											onClick={removeFile}
											key={file.lastModified}
											text={file.name}
										/>
									);
								})
							) : (
								<Span>No Files uploaded</Span>
							)}
						</DottedBox>

						<UploadButton
							// button is disabled if there are no files selected or the file isn't a pdf
							disabled={
								filenameCheck(filenames) !== filenames.length ||
								filenames.length === 0
							}
							// basic simulation of api call
							onClick={() => {
								setTimeout(() => {
									props.history.push("/patient-list", {
										list: patientdata.patients
									});
								}, 500);
							}}
						>
							Upload File(s)
						</UploadButton>
					</UploadCard>
				</UploadColumn>
			</ContentContainer>
		</>
	);
};

export default Upload;
