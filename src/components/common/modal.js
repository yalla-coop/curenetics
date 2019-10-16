import React from 'react';
import styled from 'styled-components';
import exclamation from './images/exclamation.svg';
import { OrangeButton } from './Buttons';
import { colors, breakpoint } from '../../styles/globalStyles';
import { Title, Paragraph } from './Typography';

const Bkground = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.4);
  div {
    width: 45vw;
    height: auto;
    margin: -10vh auto;
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
  margin: auto;
`;
const End = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1vh;
`;

const SmallModal = ({ onClick }) => (
  <Bkground>
    <div>
      <Head>
        <img src={exclamation} alt="exclamation mark icon" />
      </Head>
      <Title>Are you sure?</Title>
      <Paragraph>
        If you continue you will lose all the data you have so far uploaded and
        analysed along with any clinical trials found.
      </Paragraph>
      <End>
        <OrangeButton color onClick={e => onClick(e)}>
          Cancel
        </OrangeButton>
        <OrangeButton onClick={e => onClick(e)}>Confirm</OrangeButton>
      </End>
    </div>
  </Bkground>
);
export default SmallModal;
