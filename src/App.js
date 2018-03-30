import { version } from 'inferno';
import { BrowserRouter, Route } from 'inferno-router'
import { Container, Row } from './components/Grid';

const App  = () => (
	<BrowserRouter>
		<Container className="App">
			<Row>
				<header className="App-header">
					<h1>{`Welcome to Inferno ${version}`}</h1>
				</header>
			</Row>
			<Row>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</Row>
		</Container>
	</BrowserRouter>
);

export default App;
