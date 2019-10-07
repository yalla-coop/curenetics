import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputBox from "./input";
import Item from "./listItem";
import { CardHeader, CardContent, DottedBox, Span } from "./uploadStyles";
import filenameCheck from "../../../helpers";

import Chevron from "../../common/icons/Chevron";
import Plus from "../../common/icons/Plus";

import { BreadCrumb, sectionMixin, Header, columnMixin, Article, UploadCard } from "../../common/Layout";
import { Title, SubHeading, Paragraph, OL, LI } from "../../common/Typography";
import { Crumb, buttonReset, IconButton, BigButton } from "../../common/Buttons";

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

const EnterLink = styled(Link)`
  ${buttonReset};
  display: flex;
  align-items: center;
`;

const AddFiles = styled(SubHeading)`
  color: ${colors.black};
  font-weight: 400;
`;

const UploadButton = styled(IconButton)`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  padding: 0.5rem;
  margin: 0;
  @media only screen and (min-width: ${breakpoint.small}) {
    max-width: 4rem;
    margin: 0;
  }
  svg {
    margin-right: 0;
  }
`;

const Upload = () => {
  const [filenames, setFilenames] = useState([]);
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
  return (
    <>
      <BreadCrumb>
        <Crumb to="/">
          <Chevron width={20} />
        </Crumb>
      </BreadCrumb>

      <Header>
        <Title>Add your PDF files</Title>
      </Header>

      <ContentContainer hasColumns>
        <Article isLeft>
          <SubHeading>What to do:</SubHeading>
          <OL>
            <LI>Click on the Add your files button to select patients file(s). Only PDF files can be selected.</LI>
            <LI>Delete any file at any time</LI>
            <LI>When you’re ready click the Upload button to upload files.</LI>
          </OL>
        </Article>

        <UploadColumn>
          <UploadCard>
            <CardHeader>
              <InputBox onChange={selectFiles} ref={inputRef} />
              <UploadButton
                onClick={() => onButtonClick()}
                isSolid
                aria-label="Upload PDF"
              >
                <Plus fill={colors.white} width={48} />
              </UploadButton>
              <CardContent>
                <AddFiles>Add your files</AddFiles>
                <Paragraph isLight>PDF&apos;s Only</Paragraph>
              </CardContent>
            </CardHeader>

            <DottedBox>
              {filenames.length ? (
                filenames.map(file => {
                  const bgcolor = file.name.endsWith('.pdf') ? 'yes' : 'No';
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

            <BigButton
              // button is disabled if there are no files selected or the file isn't a pdf
              disabled={
                filenameCheck(filenames) !== filenames.length ||
                filenames.length === 0
              }
            >
              Upload File(s)
            </BigButton>
          </UploadCard>

          <EnterLink to="/enter">Or type in patient details</EnterLink>
        </UploadColumn>
      </ContentContainer>
    </>
  );
};

export default Upload;
