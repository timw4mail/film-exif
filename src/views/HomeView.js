import {
	Alert,
	Button,
	Col,
	Container,
	Jumbotron,
	Row,
} from '../components/Bootstrap';
import { JSONMessage } from '../helpers/web-socket';

function handleDrop (e) {
	e.preventDefault();
	e.stopPropagation();

	const draggedFiles = [];
	for (const f of e.dataTransfer.files) {
		draggedFiles.push(f.path);
	}

	window.clientWS.send(JSONMessage('dropped-files', draggedFiles));
}

function handleDragOver (e) {
	e.preventDefault();
	e.stopPropagation();
}

function showOpenDialog () {
	window.clientWS.send(JSONMessage('show-open-dialog', {}));
}

function showSaveDialog () {
	window.clientWS.send(JSONMessage('show-save-dialog', {}));
}

function showErrorDialog () {
	window.clientWS.send(JSONMessage(
		'show-error-box',
		'Looks like there was a problem. (╥﹏╥) \n (╯°□°）╯︵ ┻━┻'
	));
}

export const HomeView = (props) => {
	return (
		<main>
			<Alert color="info">
			This is a work in progress
			</Alert>
			<Jumbotron onDrop={handleDrop} onDragover={handleDragOver}>
				<Container className="App">
					<Row>
						<header className="App-header">
							<h1>Welcome to Film Exif</h1>
						</header>
					</Row>
					<Row>
						<p className="App-intro">
							Drop files here.
						</p>
					</Row>
					<Row>
						<Col md={4}>
							<Button onClick={showOpenDialog}>Show Open Dialog</Button>
						</Col>
						<Col md={4}>
							<Button onClick={showSaveDialog}>Show Save Dialog</Button>
						</Col>
						<Col md={4}>
							<Button onClick={showErrorDialog}>Show Error Dialog</Button>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</main>
	);
};
