import { BrowserRouter } from 'inferno-router';

import { Button, Form, FormGroup, Input, Label } from './components/Form';
import { Container, Row } from './components/Grid';

const App = () => (
	<BrowserRouter>
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
					<Button type="submit">Save</Button>
				</Form>
			</Row>
		</Container>
	</BrowserRouter>
);

export default App;
