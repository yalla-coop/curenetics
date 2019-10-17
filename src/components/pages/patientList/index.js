import React, { Component } from "react";
import { Select } from "antd";

import PatientIntro from "./patientIntro";
import PatientField from "./patientField";
import PatientFooter from "./patientFooter";
import PatientOrginalFile from "./patientOrginalFile";

import { addOptionsFunc } from "./addOptionsFunc";
import { patientDummyData } from "./patientDummyData";

import ExternalLink from "../../common/icons/ExternalLink";
import { PatientCard } from "../../common/Layout";
import { colors } from "../../../styles/globalStyles";

import {
	PatientlistContainer,
	PatientDetailsGrid,
	ViewFileButton
} from "./style";

// todo:
// - unique keys on PatientField
// - input focus styling -> edit to trigger focus
// - styling of select / dropdown
// - click to view original file -> results -> API call

const { Option } = Select;

class patientList extends Component {
	state = {
		list: []
	};

	componentDidMount() {
		// format input data
		// > get options for dropdowns

		const {
			location: { state },
			history,
			filenames
		} = this.props;
		if (!state) return history.push("/");
		this.setState({
			list: state.list
				? addOptionsFunc(state.list)
				: addOptionsFunc(patientDummyData),
			medicalRecords: filenames
		});
	}

	handleChange = (key, fileReference) => e => {
		// if we need to change any field? what should we know?
		// who is the patient? (fileReference)
		// what field? (key)
		// what value? (e)
		const { list } = this.state;
		// list contain array of arrays of objects [[{},{}],[{},{}]]
		// outter array is the patients
		// inner array of objects represent the status of
		// the fields of the patient like (edit, display, key, ...)
		// I explained it more on addOptionsFunc.js
		const newState = list.map(patientFields => {
			const fileReferencefound = patientFields.find(
				({ key: keyFind }) => keyFind === "fileReference"
			).value;
			// is it the patient that we looking for?
			if (fileReferencefound === fileReference) {
				/*
          an example of patientFields structure is
          [{
            id: patient-1
            key: "age"
            eidt: false
            display: "Age:"
            options: undefined
          },{
            id: patient-1
            key: "cancerType"
            eidt: false
            display: "Type of Cancer:"
            options: ['Brain cancer']
          },...]
        */
				return patientFields.map(patientField => {
					// loop throgh the keys for the patient
					if (patientField.key === key) {
						// destrucre the object for not mutating the state
						// changeing the value depeding on
						// value of the (e) > string || number? it came from select input
						// otherwise came from text input
						return {
							...patientField,
							value:
								typeof e === "string" || typeof e === "number"
									? e
									: e.target.value
						};
					}
					return patientField;
				});
			}
			return patientFields;
		});
		this.setState({
			list: newState
		});
	};

	handleEditButton = (key, fileReference, e) => {
		e.preventDefault();
		const { list } = this.state;
		const newState = list.map(patientFields => {
			const fileReferencefound = patientFields.find(
				({ key: keyFind }) => keyFind === "fileReference"
			).value;

			if (fileReferencefound === fileReference) {
				return patientFields.map(patientField => {
					if (patientField.key === key) {
						return { ...patientField, edit: !patientField.edit };
					}
					return patientField;
				});
			}
			return patientFields;
		});

		this.setState({
			list: newState
		});
	};

	renderFieldOptions = (key, fileReference, options, defaultValue) => (
		<Select
			htmlFor={fileReference + key}
			showSearch
			defaultValue={defaultValue}
			placeholder={key}
			optionFilterProp="children"
			onChange={this.handleChange(key, fileReference)}
			filterOption={(inp, opt) =>
				opt.props.children.toLowerCase().indexOf(inp.toLowerCase()) >= 0
			}
		>
			{options.map(value => (
				<Option key={value} value={value}>
					{value}
				</Option>
			))}
		</Select>
	);

	toggleModal = () => {
		this.setState(({ showModal }) => ({
			showModal: !showModal
		}));
	};

	viewOrginalFile = fileReference => () => {
		// fileReference its like the id of the patient or the name of the file
		const { medicalRecords } = this.state;
		const medicalRecordFound = medicalRecords.find(({ name }) => {
			return name.split(".")[0] === fileReference;
		});
		this.setState({
			showModal: true,
			medicalRecord: medicalRecordFound
		});
	};

	render() {
		const { list, showModal, medicalRecord } = this.state;
		const { handleEditButton, handleChange, renderFieldOptions } = this;
		return (
			<>
				<PatientOrginalFile
					showModal={showModal}
					medicalRecord={medicalRecord}
					toggleModal={this.toggleModal}
				/>
				<PatientIntro />

				{list.length > 0 && (
					<PatientlistContainer>
						{/* array contain all patients */}
						{list.map(patient => {
							const fileReference = patient.find(
								({ key }) => key === "fileReference"
							).value;
							const { id } = patient[0];

							return (
								<PatientCard key={id}>
									<PatientDetailsGrid>
										{/* loop throgh the fields of the patient */}
										{patient.map(field => (
											<PatientField
												key={`${field.id}-${field.key}`}
												fileReference={fileReference}
												patient={field}
												handleEdit={handleEditButton}
												handleChange={handleChange}
												renderFieldOptions={renderFieldOptions}
											/>
										))}
									</PatientDetailsGrid>
									<ViewFileButton
										isClear
										onClick={this.viewOrginalFile(fileReference)}
									>
										<ExternalLink fill={colors.lightPrimary} width={24} />
										Click to view original file
									</ViewFileButton>
								</PatientCard>
							);
						})}
					</PatientlistContainer>
				)}

				<PatientFooter />
			</>
		);
	}
}

export default patientList;
