import { BrowserRouter } from 'inferno-router';
import QueryString from 'query-string';

import { Jumbotron } from './components/Bootstrap';
import {
	Button,
	Form,
	FormGroup,
	Input,
	Label,
	Select
} from './components/Bootstrap/Form';
import { Container, Row } from './components/Bootstrap/Grid';

const App = () => (
	<BrowserRouter>
		<div>
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
								<label htmlFor="brand">Brand</label>
								<Input type="text" id="brand" name="brand" />
							</FormGroup>
							<FormGroup>
								<label htmlFor="filmFormat">Film Format</label>
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
			</Jumbotron>
			<br />
			<Jumbotron>
				<pre>{
					JSON.stringify(QueryString.parse(window.location.search), undefined, 2)
				}</pre>
			</Jumbotron>
		</div>
	</BrowserRouter>
);

export default App;
