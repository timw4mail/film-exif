import {
	Container,
	Jumbotron,
	Row,
} from '../components/Bootstrap';

function handleDrop (e) {
	e.preventDefault();
	e.stopPropagation();

	// console.log(e.dataTransfer.files);
	window.clientWS.send('dropped-files', e.dataTransfer.files);

	for (const f of e.dataTransfer.files) {
		console.log('Dragged files', f.path);
	}
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
