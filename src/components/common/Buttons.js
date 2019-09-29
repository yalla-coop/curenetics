import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  breakpoint, colors, font, fontFamily,
} from '../../styles/globalStyles';

const buttonReset = css`
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

const buttonMixin = css`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 0.25rem;
  &:hover {
    background-color: ${colors.lightPrimary};
  }
  @media only screen and (min-width: ${breakpoint.small}) {
    max-width: ${breakpoint.small};
    margin: 0 auto;
  }
`;

const Button = styled.button`
  ${buttonReset};
  ${buttonMixin};
`;

const IconButton = styled.button`
  ${buttonReset};
  color: ${colors.primary};
  padding: 1rem 1.5rem;
  width: 100%;
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
  }
`;

const LinkButton = styled.a`
  ${buttonReset};
  ${buttonMixin};
  text-align: center;
  &:hover {
    color: ${colors.white};
  }
`;

const Crumb = styled(Link)`
  ${buttonReset};
  color: ${colors.primary};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  > svg {
    margin-right: 0.5rem;
    transition: all 0.3s ease;
  }
  &:hover {
    color: ${colors.lightPrimary};
    svg {
      transform: translateX(-0.25rem);
    }
  }
`;


export {
  buttonReset, buttonMixin,
  Button, LinkButton, IconButton,
  Crumb,
};