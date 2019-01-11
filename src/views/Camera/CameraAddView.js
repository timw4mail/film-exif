import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	CardTitle,
	Col,
	Form,
	Row,
} from '//components/Bootstrap';
import { DOMForm } from '//components';

import { FormBlock } from '//components/Form';

/*
 * Fields from AnalogExif
 *
 * Manufacturer
 * Model
 * Serial Number
 * Film Format
 * Flash Manufacturer
 * Flash Model
 */

function logFormData (formData) {
	const data = {};
	formData.forEach((value, key) => {
		data[key] = value;
	});
	console.log(data);
}

function handleFormChange (formData) {
	// logFormData(formData);
}

function handleSave (formData) {
	logFormData(formData);
}

export function CameraAddView (props) {
	return (
		<Row className="full-height">
			<Col sm={12} md={8} lg={4} className="abs-center">
				<DOMForm
					onChange={handleFormChange}
					onSubmit={handleSave}
				>
					<Card>
						<CardHeader>
							<CardTitle>Add a Camera</CardTitle>
						</CardHeader>
						<CardBody>
							<Row className="align-items-baseline">
								<FormBlock
									label="Brand"
									name="brand"
									required
								/>
								<FormBlock
									label="Model"
									name="model"
									required
								/>
								<FormBlock
									label="Serial"
									name="serial"
									required
								/>
								<FormBlock
									label="Film Format"
									name="film-format"
								>
									<select
										className="custom-select"
										id="film-format"
										name="film-format"
									>
										<option value="">&nbsp;</option>
										<option value="110">110</option>
										<option value="120">120</option>
										<option value="127">127</option>
										<option value="135">135</option>
										<option value="220">220</option>
									</select>
								</FormBlock>
							</Row>
						</CardBody>
						<CardFooter>
							<Row>
								<Col xs={12}>
									<Button color="primary" type="submit">Save</Button>
								</Col>
							</Row>
						</CardFooter>
					</Card>
				</DOMForm>
			</Col>
		</Row>
	);
}
