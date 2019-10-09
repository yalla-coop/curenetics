import styled, { css } from 'styled-components';
import {
  breakpoint,
  colors,
  font,
  fontFamily,
} from '../../styles/globalStyles';

export const fontImport = css`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
`;

export const Title = styled.h1`
  font-family: ${fontFamily.main};
  font-weight: 700;
  color: ${colors.primary};
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: ${font.large};
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    font-size: ${font.Xlarge};
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    font-size: ${font.massive};
  }
`;

export const SubHeading = styled.h2`
  font-weight: 700;
  color: ${colors.primary};
  font-size: ${font.med};
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    font-size: ${font.large};
  }
`;

export const textMixin = css`
  font-weight: 400;
  margin-bottom: 1rem;
  font-size: ${font.Xsmall};
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    font-size: ${font.med};
  }
  strong {
    font-weight: 600;
  } 
`;

export const Paragraph = styled.p`
  ${textMixin};
  ${(props) => (props.isLight ? 'font-weight: 300' : '')};
  text-align: ${(props) => props.textAlign};
`;

export const OL = styled.ol`
  margin: 1rem 0;
  padding-left: 1rem;
`;

export const LI = styled.li`
  ${textMixin};
`;

export const Span = styled.span`
  ${textMixin};
  margin: 0;
`;
