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
    &:hover {
      span {
        display: initial;
      }
    }
  }
  span {
    display: none;
    width: 25vw;
    position: absolute;
    top: 5vh;
    left: 1vw;
    background-color: ${colors.lightAccent};
    text-align: center;
    font-size: ${font.small};
    padding: 0.5vw;
    border-radius: 8px;
    box-shadow: ${colors.boxShadow};
    z-index: 1;
  }
  &:hover {
    span {
      display: initial;
    }
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    font-size: ${font.Xsmall};
    span {
      top: 6vh;
      width: 35vw;
    }
  }
`;
const Tooltip = () => (
  <Div>
    what type of files to upload
    <img src={info} alt="info symbol" />
    <span> e.g. patient MDT proforma or clinic letter</span>
  </Div>
);
export default Tooltip;
