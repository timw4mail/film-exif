import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	CardTitle,
	Col,
	Row,
} from '//components/Bootstrap';

import {FormBlock} from '//components/Form';
import {DOMForm} from '//components';
/*
 * Fields from AnalogExif
 *
 * Manufacturer
 * Model
 * Serial Number
 * Maximum Aperture
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

export function LensesAddView () {
	return (
		<Row className="full-height">
			<Col sm={12} md={8} lg={4} className="abs-center">
				<DOMForm onChange={handleFormChange} onSubmit={handleSave}>
					<Card>
						<CardHeader>
							<CardTitle>Add a Lens</CardTitle>
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
									label="Lens Mount"
									name="mount"
									required
								/>
								<FormBlock
									label="Serial"
									name="serial"
									required
								/>
								<FormBlock
									label="Maximum Aperture"
									name="max-aperture"
									type="number"
									required
								/>
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
