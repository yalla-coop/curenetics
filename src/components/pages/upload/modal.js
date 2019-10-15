import React from 'react';
import styled from 'styled-components';
import exclamation from './exclamation.svg';
import { SubHeading, Paragraph } from '../../common/Typography';
import { colors, breakpoint } from '../../../styles/globalStyles';
import { OrangeButton } from '../../common/Buttons';

const Bkground = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  div {
    width: 45vw;
    height: auto;
    margin: -7vh auto;
    padding: 2vw;
    background-color: ${colors.white};
    border: 3px solid ${colors.accent};
    border-radius: 5px;
    @media (max-width: ${breakpoint.Xsmall}) {
      width: 70vw;
    }
  }
`;
const Head = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const Modual = ({ onClick }) => (
  <Bkground>
    <div>
      <Head>
        <img src={exclamation} alt="exclamation mark" />
        <SubHeading>
          This website uses local storage and remote data analysis
        </SubHeading>
      </Head>
      <Paragraph>
        If you are a medical professional you must use this app on a secure
        computer
      </Paragraph>
      <Paragraph>
        The PDF files will be stored locally. Any data will be wiped clean when
        you close the app or return to the home page.
      </Paragraph>
      <Paragraph>
        Data will be encrypted before being sent to a secure API to be analysed,
        but not stored.
      </Paragraph>
      <Paragraph>By using this app you consent to this data use.</Paragraph>
      <Head>
        <OrangeButton onClick={e => onClick(e)}>consent</OrangeButton>
      </Head>
    </div>
  </Bkground>
);
export default Modual;
