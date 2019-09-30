import styled, { css } from 'styled-components';

import { breakpoint, colors } from '../../styles/globalStyles';

// full width
export const sectionMixin = css`
  padding: 1rem;
  margin: 0 auto;
  max-width: ${breakpoint.massive};
`;

export const Header = styled.header`
  ${sectionMixin};
  ${props => props.isCenter ? 'text-align: center;' : ''}
  @media only screen and (min-width: ${breakpoint.tablet}) {
    ${props => props.hasColumns ? 'display: flex;' : ''}
  }
`;

export const Container = styled.section`
${sectionMixin};
${props => props.isCenter ? 'text-align: center;' : ''}
@media only screen and (min-width: ${breakpoint.tablet}) {
  ${props => props.hasColumns ? 'display: flex;' : ''}
}
`;

// half width
export const columnMixin = css`
  @media only screen and (min-width: ${breakpoint.tablet}) {
    flex: 1;
    max-width: 50%;
  }
`;

export const Article = styled.article`
  ${columnMixin};
  ${props => props.isLeft ? 'margin-bottom: 1rem;' : ''}
  ${props => props.isRight ? 'margin-top: 1rem;' : ''}
  @media only screen and (min-width: ${breakpoint.tablet}) {
    ${props => props.isLeft || props.isRight ? 'flex: 1;' : ''}
    ${props => props.isLeft ? `
    margin-bottom: 0;
    padding-right: 1rem;
    ` : ''}
    ${props => props.isRight ? `
    margin-top: 0;
    padding-left: 1rem;
    ` : ''}
  }
`;

// white cards
export const cardMixin = css`
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${colors.white};
  box-shadow: ${colors.boxShadow};
`;

export const PatientCard = styled.div`
  ${cardMixin};
  margin-top: 2rem;
  &:nth-child(1) {
    margin-top: 0;
  }
`;

export const UploadCard = styled.div`
  ${cardMixin};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

// breadcrumb
export const BreadCrumb = styled.nav`
  margin: 0 auto;
  max-width: ${breakpoint.massive};
  display: flex;
  align-items: center;
`;
