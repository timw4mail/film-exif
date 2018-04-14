import {
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
		console.log('Dragged files', f.path);
		draggedFiles.push(f.path);
	}

	window.clientWS.send(JSONMessage('dropped-files', draggedFiles));
}

function handleDragOver (e) {
	e.preventDefault();
	e.stopPropagation();
}

export const HomeView = (props) => {
	return (
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
			</Container>
		</Jumbotron>
	);
};
