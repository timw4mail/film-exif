import { Component } from 'inferno';

import {
	Button,
	Col,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
} from '../../components/Bootstrap'

export class FilmAddView extends Component {
	constructor (props) {
		super (props);

		this.state = {

		};
	}

	render () {
		return (
			<Form>
				<Row>
					<Col md={12}>
						<FormGroup>
							<Label tag="label" for="brand">Brand</Label>
							<Input type="text" id="brand" name="brand" />
						</FormGroup>
						<FormGroup>
							<Label for="filmFormat">Film Format</Label>
							<select className="custom-select" id="filmFormat" name="filmFormat">
								<option value="110">110</option>
								<option value="120">120</option>
								<option value="127">127</option>
								<option value="135">135</option>
							</select>
						</FormGroup>
					</Col>
				</Row>
				<Row>
					<Col md={12}>
						<Button color="primary" type="submit">Save</Button>
					</Col>
				</Row>
			</Form>
		)
	}
}
