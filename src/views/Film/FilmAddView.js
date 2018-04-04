import { Component } from 'inferno';

import {
	Button,
	Col,
	Form,
	Row,
} from '../../components/Bootstrap'

import { FormBlock } from '../../components';

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
				<Row>
					<Col xs={12}>
						<Button color="primary" type="submit">Save</Button>
					</Col>
				</Row>
			</Form>
		)
	}
}
