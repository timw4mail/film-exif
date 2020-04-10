import {
	Button,
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	CardTitle,
	Col,
	FormGroup,
	FormText,
	Input,
	InputGroup,
	InputGroupAddon,
	Label,
	Row,
} from '//components/Bootstrap';

import {FormBlock} from '//components/Form';
import {DOMForm} from '//components';

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
		<Row class="full-height">
			<Col sm={12} class="abs-center">
				<DOMForm onChange={handleFormChange} onSubmit={handleSave}>
					<Card>
						<CardHeader>
							<CardTitle>Add a Film</CardTitle>
						</CardHeader>
						<CardBody>
							<Row class="form-row align-items-baseline">
								<FormBlock
									label="Manufacturer"
									name="brand"
									required
								/>
								<FormBlock
									helpText="e.g. Ektar, Fujicolor, etc."
									label="Film Name"
									name="film-name"
									required
								/>
								<Col sm={12} md={6} lg={4}>
									<FormGroup>
										<Label for="film-speed-asa">Film Speed (IS0)</Label>
										<InputGroup>
											<Input
												max="6400"
												maxLength="4"
												min="1"
												name="film-speed-asa"
												placeholder="100"
												required
												type="number"
											/>
											<InputGroupAddon addonType="append">/</InputGroupAddon>
											<Input
												max="39"
												maxLength="2"
												min="1"
												name="film-speed-din"
												placeholder="21"
												required
												size="2"
												step="1"
												type="number"
											/>
											<InputGroupAddon addonType="append">&deg;</InputGroupAddon>
										</InputGroup>
										<FormText>Film Sensitivity</FormText>
									</FormGroup>
								</Col>
								<FormBlock
									label="Film Format"
									name="film-format"
								>
									<select
										className="custom-select"
										id="film-format"
										name="film-format"
									>
										<optgroup label="Miniature Format">
											<option value="110">110 (Pocket Instamatic)</option>
											<option selected value="135">35mm (135)</option>
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
}
