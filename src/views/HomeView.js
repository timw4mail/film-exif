import QueryString from 'query-string';
import {
	Button,
	Container,
	Form,
	FormGroup,
	Input,
	Jumbotron,
	Label,
	Row,
} from '../components/Bootstrap';

export const HomeView = (props) => {
	return (
		<Jumbotron>
			<Container className="App">
				<Row>
					<header className="App-header">
						<h1>Welcome to Inferno</h1>
					</header>
				</Row>
				<Row>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
				</Row>
				<Row>
					<Form>
						<FormGroup>
							<Label tag='label' for="brand">Brand</Label>
							<Input type="text" id="brand" name="brand" />
						</FormGroup>
						<FormGroup>
							<Label tag='label' for="filmFormat">Film Format</Label>
							<select className="custom-select" id="filmFormat" name="filmFormat">
								<option value="110">110</option>
								<option value="120">120</option>
								<option value="127">127</option>
								<option value="135">135</option>
							</select>
						</FormGroup>
						<Button color="primary" type="submit">Save</Button>
					</Form>
				</Row>
			</Container>
			<pre>{
				JSON.stringify(QueryString.parse(window.location.search), undefined, 2)
			}</pre>
		</Jumbotron>
	)
}
