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
} from '../../components/Bootstrap';

import { FormBlock } from '../../components/Form';

export class CameraAddView extends Component {
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
								<CardTitle>Add a Camera</CardTitle>
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
										label="Model"
										name="model"
										required
										value={this.state.form.values['model']}
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
