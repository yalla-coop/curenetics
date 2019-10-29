import styled from 'styled-components';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { colors, breakpoint } from '../../../styles/globalStyles';

export const Wrapper = styled.section`
  background-color: white;
  color: ${colors.black};
  padding: 1.7rem 1rem 1rem 1rem;
  margin-bottom: 2rem;
`;

export const DetailWrapper = styled.div`
  border-bottom: solid 1px;
  padding: 1rem 0rem;
  margin-bottom: 0.7rem;
  display: 'flex';
  flex-direction: 'column';
`;

export const DetailSection = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 28px;
  & > div {
    display: 'flex';
  }
  @media only screen and (max-width: ${breakpoint.tablet}) {
    display: flex;
    flex-direction: column;
    & > button {
      margin-top: 10px;
      align-self: flex-end;
    }
  }
`;

export const HighLight = styled.span`
  color: ${colors.primary};
  text-decoration: underline;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const HighLightNumber = styled.span`
  color: ${({ color }) => color};
  font-size: 1.8rem;
  padding-left: 1rem;
`;

export const PrimarySpam = styled.span`
  color: ${colors.primary};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'inherit')};
`;

export const PrimaryParagraph = styled.p`
  color: ${colors.primary};
`;

export const BoldParagraph = styled.p`
  color: ${colors.black};
  font-weight: 400;
  margin-bottom: 0.5rem;
`;

export const HeadSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ExportButton = styled(PDFDownloadLink)`
  border: none;
  outline: none;
  color: ${colors.white};
  background-color: ${colors.primary};
  text-align: center;
  padding: 1rem;
  border-radius: 6px;
  font-size: medium;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: white;
  }
`;

export const HeadPragraph = styled.p`
  padding: 1rem 0rem;
  line-height: inherit;
`;

export const ColumnSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ThreeColumnSection = styled.section`
  display: flex;
  & > div {
    flex: 1;
  }
  & > span {
    color: ${colors.primary};
  }

  @media only screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
  }
`;

export const TableHeaderText = styled.h2`
  text-align: center;
  font-size: 1.2rem;
`;

export const TwoColumnSection = styled.section`
  display: flex;
  margin: 1rem 0rem;
  & > div:first-child {
    flex: 1;
  }
  & > div:nth-child(2) {
    flex: 2;
  }
  & > span {
    color: ${colors.primary};
  }
  @media only screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
  }
`;

export const ViewFullTrial = styled.span`
  color: ${colors.primary};
  margin-bottom: 0.7rem;
  margin-right: 1rem;
`;

export const FieldWrapper = styled.div`
  display: flex;
  font-size: smaller;
  & > div:first-child {
    padding-right: 5px;
  }
  @media only screen and (max-width: ${breakpoint.tablet}) {
    font-size: inherit;
  }
`;

export const LocationSection = styled.div`
  color: ${colors.primary};
  margin-bottom: 5px;
  & > :first-child {
    margin-right: 1rem;
  }
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  @media only screen and (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    & > button {
      align-self: flex-end;
    }
  }
`;

export const TableWrapper = styled.div`
  padding: 0rem 0rem;
  margin: 1rem 0rem;
  border: solid 1px ${colors.darkGrey};
  border-radius: 8px;
`;

export const TableBody = styled.div`
  padding: '0rem 0rem 1rem 0rem';
`;

export const TableHeadColor = styled.div`
  width: 100%;
  height: 1rem;
  background-color: ${props =>
    props.isPotential ? colors.confirm : colors.accent};
  border: solid 1px ${colors.darkGrey};
  border-radius: 5px 5px 0px 0px;
`;

export const TableRowHead = styled.div`
  display: flex;
  border-bottom: solid 1px;
  padding: 0rem 1rem;
  & > :first-child {
    width: 70%;
  }
  @media only screen and (max-width: ${breakpoint.tablet}) {
    border: 0px;
    padding: 0rem 2rem 1rem 2rem;
  }
`;

export const TableRow = styled.div`
  padding: 0rem 1rem;
  margin: 0.5rem 0rem;
  display: flex;
  & > :first-child {
    width: 67%;
  }
  & > :nth-child(2) {
    width: 32%;
  }
`;
