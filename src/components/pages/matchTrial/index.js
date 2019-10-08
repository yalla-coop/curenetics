import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Header } from '../../common/Layout';
import { Title, Paragraph } from '../../common/Typography';
import ExportLink from '../../common/icons/ExportLink.jsx';
import ExternalLink from '../../common/icons/ExternalLink';
import Avatar from '../../common/icons/Avatar.jsx';
import Calendar from '../../common/icons/Calendar.jsx';
import Tick from '../../common/icons/Tick.jsx';
import TestTube from '../../common/icons/TestTube.jsx';
import Plus from '../../common/icons/Plus.jsx';
import Marker from '../../common/icons/Marker.jsx';
import { Container } from '../../common/Layout';
import Phase from '../../common/icons/Phase.jsx';

import * as S from './index.style';
import { colors, breakpoint } from '../../../styles/globalStyles';
import 'antd/dist/antd.css';
import Search from 'antd/lib/input/Search';

export default class index extends Component {
	state = {}
	updateWindowDimensions = () => {
		this.setState({
			windowWidth: window.innerWidth
		});
	};

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener("resize", this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateWindowDimensions);
	}

	renderSmallTable() {
		return (
			<S.tableLarge>
				<S.TableHeadColor>
				</S.TableHeadColor>
				<div style={{ padding: "0rem 0rem 1rem 0rem" }}>
					<h2 style={{ textAlign: "center", fontSize: "1.2rem" }}>Matching criteria</h2>
					<S.rowTableHead><span>Trial</span><span>Patient</span></S.rowTableHead>
					<S.rowTable>
						<span>Age: 18-85</span>
						<span><Tick></Tick></span>
					</S.rowTable>
					<S.rowTable>
						<span>Condition: Prostate Cancer Metastatic, Castration-resistant Prostate Cancer</span>
						<span><Tick></Tick></span>
					</S.rowTable>
					<S.rowTable>
						<span>Gender: Male</span>
						<span><Tick></Tick></span>
					</S.rowTable>
					<S.rowTable>
						<span>ECOG status: 2 </span>
						<span><Tick></Tick></span>
					</S.rowTable>
					<S.rowTable>
						<span>Gleason score: 0-2</span>
						<span><Tick></Tick></span>
					</S.rowTable>
					<S.rowTable>
						<span>prostate: Yes</span>
						<span><Tick></Tick></span>
					</S.rowTable>
				</div>
			</S.tableLarge>
		)
	}
	renderLargeTable() {
		return <S.tableLarge>
			<S.TableHeadColor>
			</S.TableHeadColor>
			<div style={{ padding: "0rem 0rem 1rem 0rem" }}>
				<h2 style={{ textAlign: "center", fontSize: "1.2rem" }}>Matching criteria</h2>
				<S.rowTableHead><span>Trial criteria</span><span>Patient details</span></S.rowTableHead>
				<S.rowTable>
					<span>Age: 18-85</span>
					<span>Age: 72</span>
				</S.rowTable>
				<S.rowTable>
					<span>Condition: Prostate Cancer Metastatic, Castration-resistant Prostate Cancer</span>
					<span>Condition: Prostate Cancer </span>
				</S.rowTable>
				<S.rowTable>
					<span>Gender: Male</span>
					<span>Gender: Male</span>
				</S.rowTable>
				<S.rowTable>
					<span>ECOG status: 2 </span>
					<span>ECOG status: 2 </span>
				</S.rowTable>
				<S.rowTable>
					<span>Gleason score: 0-2</span>
					<span>Gleason score: 0-2</span>
				</S.rowTable>
				<S.rowTable>
					<span>Disease within prostate: Yes</span>
					<span>Disease within prostate: Yes</span>
				</S.rowTable>
			</div>
		</S.tableLarge>
	}

	render() {
		const { windowWidth } = this.state;
		return (
			<>
				<Title>Matched trials for patient: </Title>
				<Container style={{ maxWidth: breakpoint.tablet }}>
					<S.DetailWrapper>
						<div >
							<S.HighLight>Potentialy eligible trials:</S.HighLight>
							<S.HighLightNumber style={{ color: colors.confirm }}>4</S.HighLightNumber>
						</div>
						<S.DetailSection>
							<div style={{ display: "flex" }}>
								<S.HighLight>Nearly eligible Trials:</S.HighLight>
								<S.HighLightNumber style={{ color: colors.accent }}>3</S.HighLightNumber>
							</div>
							<S.ExportButton>
								Export all trials to PDF
								<ExportLink margin={"0px 0px 0px 10px"}></ExportLink>
							</S.ExportButton>
						</S.DetailSection>
					</S.DetailWrapper>
					<S.PrimaryParagraph>Potentially Eligible trials</S.PrimaryParagraph>
					<S.Wrapper>
						<S.HeadSection>
							<div>
								<S.PrimarySpam>NCT Number: </S.PrimarySpam>
								<span>NCT0355514</span>
							</div>
							<S.PrimarySpam style={{ fontWeight: "bold" }}>
								PRONOUNCE
							</S.PrimarySpam>
						</S.HeadSection>
						<S.HeadPragraph>
							A Trial Comparing Cardiovascular Safety of Degarelix Versus Leuprolide in Patients With Advanced Prostate Cancer and Cardiovascular Disease
						</S.HeadPragraph>
						<S.RowSection>
							<S.ColumnSection>
								<S.FieldWrapper>
									<div>
										<Calendar></Calendar>
									</div>
									<div>
										<span>Starting Date: Sept 27, 2018</span>
										<span>Finish  Date: Ongoing</span>
									</div>
								</S.FieldWrapper>
							</S.ColumnSection>
							<S.ColumnSection>
								<S.FieldWrapper>
									<div>
										<Avatar></Avatar>
									</div>
									<span>Phase: 3</span>
								</S.FieldWrapper>
								<S.FieldWrapper>
									<div>
										<Tick></Tick>
									</div>
									<span>Recruiting</span>
								</S.FieldWrapper>
							</S.ColumnSection>
							<S.FieldWrapper>
								<div>
									<Avatar></Avatar>
								</div>
								<span>Enrolled: 6,000,000</span>
							</S.FieldWrapper>
						</S.RowSection>
						<S.RowSection>
							<S.FieldWrapper>
								<div>
									<TestTube></TestTube>
								</div>
								<span>Interventions: Degarelix, Leuprolide</span>
							</S.FieldWrapper>
							<S.FieldWrapper style={{ gridColumn: "2/4" }}>
								<div>
									<Plus></Plus>
								</div>
								<span>Sponsor/Collaborators: Ferring Pharmaceuticals, Memorial Sloan Kettering</span>
							</S.FieldWrapper>
						</S.RowSection>
						<S.FieldWrapper style={{ gridColumn: "2/4" }}>
							<div>
								<Plus></Plus>
							</div>
							<span>Allocation: Randomized. Intervention Model: Paralle. Assignment. Masking: Single (Outcomes Assessor). Primary Purpose: Treatment</span>
						</S.FieldWrapper>
						{windowWidth > +breakpoint.tablet.split("px")[0] ? this.renderLargeTable() : this.renderSmallTable()}
						<section>
							<S.BoldParagraph >Nearest Trial Locations: </S.BoldParagraph>
							<S.LocationSection>
								<span>
									<Marker width="14px"></Marker>
									5 miles
								</span>
								<span>St Bartholomew’s  Hospital, London  EC1A 7JQ</span>
							</S.LocationSection>
							<S.BottomSection>
								<span style={{ gridColumn: "1 / 3" }}>
									<ExternalLink></ExternalLink>
									Click here to view full Clinical Trial details
								</span>
								<S.ExportButton style={{ gridColumn: "3 / 4" }} >
									Export all trials to PDF
									<ExportLink margin={"0px 0px 0px 10px"}></ExportLink>
								</S.ExportButton>
							</S.BottomSection>
						</section>
					</S.Wrapper>
				</Container>
			</>
		);
	}

}
