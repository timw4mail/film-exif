import { version, Component } from 'inferno';
import { Container, Row } from './components/Grid'

class App extends Component {
	render () {
		return (
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
		);
	}
}

export default App;
