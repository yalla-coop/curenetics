import styled, { css } from 'styled-components';
import { breakpoint, colors, font, fontFamily } from '../../styles/globalStyles';

const Title = styled.h1`
  font-family: ${fontFamily.main};
  font-weight: 700;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 2rem;
  font-size: ${font.large};
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    font-size: ${font.Xlarge};
  }
  @media only screen and (min-width: ${breakpoint.tablet}) {
    font-size: ${font.massive};
  }
`;

const SubHeading = styled.h2`
  font-weight: 700;
  color: ${colors.primary};
  font-size: ${font.med};
  @media only screen and (min-width: ${breakpoint.Xsmall}) {
    font-size: ${font.large};
  }
`;

const textMixin = css`
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

const Paragraph = styled.p`
  ${textMixin};
  ${props => props.isLight ? 'font-weight: 300' : ''};
`;

const OL = styled.ol`
  margin: 1rem 0;
  padding-left: 1rem;
`;

const LI = styled.li`
  ${textMixin};
`;

export {
  Title, SubHeading, Paragraph, OL, LI, textMixin,
};