import styled from 'styled-components';
import { colors } from '../../../styles/globalStyles';
import { breakpoint } from '../../../styles/globalStyles';

export const Wrapper = styled.section`
	background-color: white;
	padding: 1.7rem 1rem 1rem 1rem;
`;

export const DetailWrapper =styled.div`
	border-bottom: solid 1px;
	padding: 1rem 0rem;
	margin-bottom: 0.7rem;
	display: "flex";
	flex-direction: "column";
`
export const DetailSection = styled.div`
	display: flex;
	justify-content: space-between;
	line-height: 28px;
	@media only screen and (max-width: ${breakpoint.tablet}) {
		display: flex;
		flex-direction: column;
		& > button {
			margin-top: 10px;
			align-self: flex-end;
		}
  	};
`;

export const HighLight = styled.span`
	color: ${colors.primary};
	text-decoration: underline;
	font-size: 1rem;
`;

export const HighLightNumber = styled.span`
	color: ${colors.cancel};
	font-size: 2rem;
	padding-left: 1rem;
`;

export const PrimarySpam = styled.span`
	color: ${colors.primary};
`;

export const PrimaryParagraph = styled.p`
	color: ${colors.primary};
`

export const BoldParagraph = styled.p`
	color: ${colors.black};
	padding: 0.7rem 0rem 0rem;
	font-weight: bold;
`

export const HeadSection = styled.div`
	display:flex;
	justify-content:space-between;
`;

export const ExportButton = styled.button`
 	border: none;
	outline: none;
	color: #fff;
	background-color: #35348f;
	text-align: center;
	padding: 0.2rem 0.5rem;
	border-radius: 6px;
`

export const HeadPragraph = styled.p`
	padding: 1rem 0rem;
	font-weight:900;
`

export const ColumnSection = styled.section`
	display: flex;
	flex-direction: column;
`;

export const RowSection = styled.section`
	display:grid;
	grid-template-columns:1.7fr 2fr 1fr;
	grid-gap: 0.5rem;
	& > span {
		color: ${colors.primary};
	}

	@media only screen and (max-width: ${breakpoint.tablet}) {
		display: block;
		grid-template-columns: initial;
		grid-gap: initial;
	};
`;

export const FieldWrapper = styled.div`
	display: flex;
	& > div:first-child {
		padding-right: 5px;
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
	& > :first-child {
		margin-right: 1rem;
	}
	@media only screen and (max-width: ${breakpoint.tablet}) {
		flex-direction: column;
		& > button {
			align-self: flex-end;
		}
	};
`


export const rowTable = styled.div`
	padding: 0rem 1rem;
	display:flex;
	& > :first-child {
		width: 70%;
	}
`;

export const TableHeadColor = styled.div`
	width: 100%;
	height: 1rem;
	background-color: ${colors.confirm};
	border: solid 1px ${colors.darkGrey};
	border-radius: 5px 5px 0px 0px;
`

export const tableLarge = styled.div`
	padding: 0rem 0rem;
	border: solid 1px ${colors.darkGrey};
	border-radius: 8px;
`;

export const rowTableHead = styled.div`
	display: flex;
	border-bottom: solid 1px;
	padding: 0rem 1rem;
	& > :first-child {
		width: 70%;
	}
	@media only screen and (max-width: ${breakpoint.tablet}) {
		border: 0px;
		padding: 0rem 2rem 1rem 2rem;
	};
`;
