import { linkEvent, Component } from 'inferno';

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
} from 'components/Bootstrap'

import { FormBlock } from 'components/Form';

export class FilmAddView extends Component {
	constructor (props) {
		super (props);

		this.state = {
			form: {
				valid: {},
				values: {},
			}
		};
	}

	handleFormChange (e) {
		console.log(e);
	}

	render () {
		return (
			<Row className="full-height">
				<Col sm={12} md={8} lg={4} className="abs-center">
					<Form onChange={ linkEvent(this, this.handleFormChange) }>
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
										label="Film Speed (ISO)"
										max="6400"
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
										<select className="custom-select" id="film-format" name="film-format">
											<option value="110">110</option>
											<option value="120">120</option>
											<option value="127">127</option>
											<option value="135">135</option>
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
					</Form>
				</Col>
			</Row>
		)
	}
}
