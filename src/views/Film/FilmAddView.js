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
} from 'components/Bootstrap';

import { FormBlock } from 'components/Form';

export class FilmAddView extends Component {
	constructor (props) {
		super(props);

		this.state = {
			form: {
				valid: {},
				values: {},
			},
		};
	}

	handleFormChange (instance, e) {
		instance.setState({
			form: {
				...instance.state.form,
				values: {
					...instance.state.form.values,
					[e.target.id]: e.target.value,
				},
			},
		});
	}

	render () {
		return (
			<Row className="full-height">
				<Col sm={12} md={8} lg={4} className="abs-center">
					<Form onKeyDown={ linkEvent(this, this.handleFormChange) }>
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
										value={this.state.form.values['brand']}
									/>
									<FormBlock
										label="Film Name"
										name="film-name"
										required
										value={this.state.form.values['film-name']}
									/>
									<FormBlock
										label="Film Speed (ISO)"
										max="6400"
										name="film-speed-asa"
										required
										type="number"
										value={this.state.form.values['film-speed-asa']}
									/>
									<FormBlock
										label="Film Speed (DIN)"
										name="film-speed-din"
										type="number"
										value={this.state.form.values['film-speed-din']}
									/>
									<FormBlock
										label="Film Format"
										name="film-format"
										value={this.state.form.values['film-format']}
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
		);
	}
}
