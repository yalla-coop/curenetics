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
  padding: 1vw;
  justify-items: center;
  align-items: center;
  margin-top: -3vh;
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
        Medical professionals must only used this app on a secure or
        trust-approved computer. The uploaded files(s) will be stored locally
        but wiped when you close the app.
      </Paragraph>
      <Paragraph>
        Medical information extracted is immediately pseudo-anonymised and then
        encrypted before analyses. However, please do not use any sensitive
        information within the actual filename.
      </Paragraph>
      <Paragraph>
        This current software iteration is only optimised for scientific and
        research purposes. It must not serve as aid in clinical decision making.
      </Paragraph>
      <Paragraph>By using this app you consent to this data use.</Paragraph>
      <Head>
        <OrangeButton onClick={e => onClick(e)}>OK</OrangeButton>
      </Head>
    </div>
  </Bkground>
);
export default Modual;
