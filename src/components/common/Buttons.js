import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  breakpoint, colors, font, fontFamily,
} from '../../styles/globalStyles';

export const buttonReset = css`
  cursor: pointer;
  border: 0;
  padding: 0;
  background: transparent;
  box-shadow: none;
  font-family: ${fontFamily.body};
  font-size: ${font.small};
  transition: all 0.3s ease;
  @media only screen and (min-width: ${breakpoint.small}) {
    font-size: ${font.med};
  }
  line-height: 1;
  &:focus {
    outline: none;
  }
`;

export const buttonMixin = css`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${colors.lightPrimary};
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    max-width: ${breakpoint.small};
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  ${buttonReset};
  ${buttonMixin};
`;

export const IconButton = styled.button`
  ${buttonReset};
  color: ${colors.primary};
  background-color: ${(props) => props.color || colors.white};
  padding: 1rem 1.5rem;
  border-radius: 0.25rem;
  @media only screen and (min-width: ${breakpoint.small}) {
    max-width: ${breakpoint.small};
    margin: 0 auto;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    margin-right: 1rem;
    fill:${colors.white};
  }
`;

export const BackLink = styled(Link)`
  ${buttonReset};
  ${buttonMixin};
  text-align: center;
  display: block;
  @media only screen and (min-width: ${breakpoint.small}) {
    margin-top: 2rem;
  }
  &:hover {
    color: ${colors.white};
  }
`;

export const Crumb = styled(Link)`
  ${buttonReset};
  display: flex;
  align-items: center;
  > svg {
    transition: all 0.3s ease;
  }
  &:hover svg {
    transform: translateX(-0.25rem);
  }
`;
export const BigButton = styled(Button)`
width: 30vw;
`;
