import {
	Container,
	Jumbotron,
	Row,
} from '../components/Bootstrap';

function handleDrop (e) {
	e.preventDefault();
	e.stopPropagation();

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
						<h1>Welcome to Inferno</h1>
					</header>
				</Row>
				<Row>
					<p className="App-intro">
						To get started, edit <code>src/App.js</code> and save to reload.
					</p>
				</Row>
			</Container>
		</Jumbotron>
	);
};
