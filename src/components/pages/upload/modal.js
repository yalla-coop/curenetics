import React from 'react';
import styled from 'styled-components';
import exclamation from './exclamation.svg';
import { SubHeading, ModParagraph } from '../../common/Typography';
import { colors, breakpoint } from '../../../styles/globalStyles';
import { OrangeButton } from '../../common/Buttons';

const Bkground = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.4);
  div {
    width: 70vw;
    height: auto;
    margin: auto auto;
    margin-top: 8vh;
    padding: 2vw;
    background-color: ${colors.white};
    border: 3px solid ${colors.accent};
    border-radius: 5px;
    @media (max-width: 450px) {
      height: 90vh;
      width: 90vw;
      margin: auto auto;
      margin-left: 0.5%;
      padding-left: 3vw;
      position: absolute;
      overflow: scroll;
    }
  }
  @media (max-width: 450px) {
    div {
      margin-left: 5vw;
    }
  }
`;
const Head = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2vw;
  padding-top: 2vh;
  justify-items: center;
  align-items: center;
  margin-top: -3vh;
`;
const Img = styled.img`
  padding-bottom: 4vh;
  padding-top: 2vh;
  @media (max-width: ${breakpoint.Xsmall}) {
    margin-top: 1vh;
  }
`;
const close = e => {
  if (e.target.id === 'mod') e.target.style.display = 'none';
};

const Modual = ({ onClick }) => (
  <Bkground id="mod" onClick={close}>
    <div>
      <Head>
        <Img src={exclamation} alt="exclamation mark" />
        <SubHeading>
          This website uses local storage and remote data analysis
        </SubHeading>
        <br />
      </Head>
      <ModParagraph isLight>
        Medical professionals must only used this app on a secure or
        trust-approved computer. The uploaded files(s) will be stored locally
        but wiped when you close the app.
      </ModParagraph>
      <ModParagraph isLight>
        Medical information extracted is immediately pseudo-anonymised and then
        encrypted before analyses. However, please do not use any sensitive
        information within the actual filename.
      </ModParagraph>
      <ModParagraph isLight>
        This current software iteration is only optimised for scientific and
        research purposes. It must not serve as aid in clinical decision making.
      </ModParagraph>
      <ModParagraph isLight>
        By using this app you consent to this data use.
      </ModParagraph>
      <br />
      <Head>
        <OrangeButton onClick={e => onClick(e)}>OK</OrangeButton>
      </Head>
    </div>
  </Bkground>
);
export default Modual;
