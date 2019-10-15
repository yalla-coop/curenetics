import React from 'react';
import styled from 'styled-components';
import {
  colors,
  fontFamily,
  font,
  breakpoint,
} from '../../../styles/globalStyles';
import info from './info.svg';

const Div = styled.div`
  position: relative;
  display: inline-block;
  font: ${fontFamily.body};
  font-size: ${font.med};
  font-weight: 300;
  img {
    width: 3vw;
    height: 2vh;
  }
  span {
    display: none;
    width: 25vw;
    position: absolute;
    top: 5vh;
    left: 1vw;
    background-color: ${colors.disabled};
    text-align: center;
    font-size: ${font.small};
    padding: 0.5vw;
    border-radius: 8px;
    z-index: 1;
  }
  &:hover {
    span {
      display: initial;
    }
    @media only screen and (min-width: ${breakpoint.small}) {
      font-size: ${font.Xsmall};
    }
  }
`;
const Tooltip = () => (
  <Div>
    what type of files to upload
    <img src={info} alt="info symbol" />
    <span>Text to be given by Sola</span>
  </Div>
);
export default Tooltip;
