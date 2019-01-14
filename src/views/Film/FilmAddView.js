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

import { FormBlock } from '//components/Form';
import { DOMForm } from '//components';

/*
 * Fields from AnalogExif
 *
 * Manufacturer
 * Name
 * Alias
 * Grain
 * ISO Rating
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

export function FilmAddView () {
	return (
		<Row className="full-height">
			<Col sm={12} md={8} lg={4} className="abs-center">
				<DOMForm onChange={handleFormChange} onSubmit={handleSave}>
					<Card>
						<CardHeader>
							<CardTitle>Add a Film</CardTitle>
						</CardHeader>
						<CardBody>
							<Row className="align-items-baseline">
								<FormBlock
									label="Brand"
									name="brand"
									required
								/>
								<FormBlock
									label="Film Name"
									name="film-name"
									required
								/>
								<FormBlock
									label="Film Speed (ASA/ISO)"
									max="6400"
									min="1"
									name="film-speed-asa"
									required
									type="number"
								/>
								<FormBlock
									label="Film Speed (DIN)"
									name="film-speed-din"
									type="number"
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
										<optgroup label="Miniature Format">
											<option value="110">110</option>
											<option value="135">35mm (135)</option>
										</optgroup>
										<optgroup label="Medium Format">
											<option value="120">120</option>
											<option value="127">127</option>
											<option value="220">220</option>
											<option value="620">620</option>
										</optgroup>
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
};

