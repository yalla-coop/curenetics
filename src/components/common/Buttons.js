import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  breakpoint,
  colors,
  font,
  fontFamily,
} from '../../styles/globalStyles';

// NOTES
// > 8 basic varieties of buttons / links:
// - (1 - 4): <button> (clear and purple), plus each type with an icon
// - (5 - 8): <a> anchor link (clear and purple), plus each type with an icon

// > mixins can't recieve props. Mixins are declared with css``;
// - add props in the component declaration styled``;

// - - - -
// mixins

// base:
// - applies to all buttons and links that look like buttons
// - does not set colour
export const buttonBase = css`
  cursor: pointer;
  border: 0;
  padding: 0;
  background: transparent;
  box-shadow: none;
  font-family: ${fontFamily.body};
  font-size: ${font.small};
  text-align: center;
  line-height: 1.5;
  transition: all 0.3s ease;
  padding: 0.65rem 1rem;
  border-radius: 0.15rem;
  &:focus {
    outline: none;
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    font-size: ${font.med};
    padding: 0.8rem 1.6rem;
    border-radius: 0.25rem;
    max-width: ${breakpoint.small};
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 0.8rem 3rem;
  }
`;

export const purpleButton = css`
  background-color: ${colors.primary};
  color: ${colors.white};
  &:hover {
    background-color: ${colors.lightPrimary};
    color: ${colors.white};
  }
`;

export const clearButton = css`
  background-color: transparent;
  color: ${colors.primary};
  &:hover {
    background-color: transparent;
    color: ${colors.primary};
  }
`;

export const purpleAnchor = css`
  ${purpleButton};
  &:visited {
    color: ${colors.white};
  }
  &:visited:hover {
    background-color: ${colors.lightPrimary};
    color: ${colors.white};
  }
`;

export const clearAnchor = css`
  ${clearButton};
  &:visited {
    color: ${colors.primary};
  }
  &:visited:hover {
    background-color: transparent;
    color: ${colors.primary};
  }
`;

export const iconButtonMixin = css`
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    fill: ${colors.white};
  }
`;

// - - - -
// buttons
export const Button = styled.button`
  ${buttonBase};
  ${props => (props.isClear ? clearButton : purpleButton)};
  ${props => (props.isCenter ? `margin: 0 auto;` : ``)};
`;

export const IconButton = styled(Button)`
  ${iconButtonMixin};
  ${props => (props.iconRight ? `flex-direction: row-reverse;` : '')}
  > svg {
    ${props => (props.iconRight ? `margin-left: 1rem;` : `margin-right: 1rem;`)}
  }
`;

// - - - -
// anchors
export const Anchor = styled(Link)`
  ${buttonBase};
  ${props => (props.isClear ? clearAnchor : purpleAnchor)};
  ${props => (props.isCenter ? `margin: 0 auto;` : ``)};
`;

export const IconAnchor = styled(Anchor)`
  ${iconButtonMixin};
  ${props => (props.iconRight ? `flex-direction: row-reverse;` : '')}
  > svg {
    ${props => (props.iconRight ? `margin-left: 1rem;` : `margin-right: 1rem;`)}
  }
`;

export const BackLink = styled(Link)`
  ${buttonBase};
  display: flex;
  align-items: center;
  > svg {
    transition: all 0.3s ease;
  }
  &:hover svg {
    transform: translateX(-0.25rem);
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    padding: 0.8rem;
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    padding: 0.8rem;
  }
`;
