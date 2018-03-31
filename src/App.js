import { BrowserRouter } from 'inferno-router';

import { Jumbotron } from './components/Bootstrap';
import { Button, Form, FormGroup, Input, Label } from './components/Bootstrap/Form';
import { Container, Row } from './components/Bootstrap/Grid';

const App = () => (
	<BrowserRouter>
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
							<Label htmlFor="brand">Brand</Label>
							<Input type="text" id="brand" name="brand" />
						</FormGroup>
						<Button color="primary" type="submit">Save</Button>
					</Form>
				</Row>
			</Container>
		</Jumbotron>
	</BrowserRouter>
);

export default App;
