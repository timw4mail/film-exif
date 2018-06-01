import bindAll from 'lodash-es/bindAll';
import { Component } from 'inferno';
import {
	Button,
	Col,
	Container,
	Jumbotron,
	Modal,
	ModalBody,
	ModalFooter,
	ModalHeader,
	Row,
} from '//components/Bootstrap';

export class HomeView extends Component {
	constructor (props) {
		super(props);

		this.state = {
			exifData: [],
			showModal: false,
		};

		bindAll(this, [
			'bindEvents',
			'handleDrop',
			'showErrorDialog',
			'showOpenDialog',
			'showSaveDialog',
			'toggleErrorModal',
		]);
	}

	componentDidMount () {
		this.bindEvents();
	}

	bindEvents () {
		this.context.ws.subscribe('parsed-exif-tags', data => {
			this.setState({
				exifData: data,
			});
		});
	}

	handleDragOver (e) {
		e.preventDefault();
		e.stopPropagation();
	}

	handleDrop (e) {
		e.preventDefault();
		e.stopPropagation();

		const draggedFiles = [];
		for (const f of e.dataTransfer.files) {
			draggedFiles.push(f.path);
		}

		const newTransfer = { ...e.dataTransfer };
		console.info(newTransfer);

		this.context.ws.sendJSON('dropped-files', draggedFiles);
	}

	showErrorDialog () {
		this.context.ws.sendJSON(
			'show-error-box',
			'Looks like there was a problem. (╥﹏╥) \n (╯°□°）╯︵ ┻━┻'
		);
	}

	showOpenDialog () {
		this.context.ws.sendJSON('show-open-dialog');
	}

	showSaveDialog () {
		this.context.ws.sendJSON('show-save-dialog');
	}

	toggleErrorModal () {
		this.setState(prevState => ({
			showModal: !prevState.showModal,
		}));
	}

	render () {
		return (
			<main>
				<Jumbotron onDrop={this.handleDrop} onDragover={this.handleDragOver}>
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
							<Col md={3}>
								<Button onClick={this.showOpenDialog}>Show Open Dialog</Button>
							</Col>
							<Col md={3}>
								<Button onClick={this.showSaveDialog}>Show Save Dialog</Button>
							</Col>
							<Col md={3}>
								<Button onClick={this.showErrorDialog}>Show Error Dialog</Button>
							</Col>
							<Col md={3}>
								<Button onClick={this.toggleErrorModal}>Show Error Modal</Button>
							</Col>
						</Row>
						<Row>
							<Col md={12}>
								<h3>Parsed Exif Data</h3>
								<pre>{JSON.stringify(this.state.exifData, null, 2)}</pre>
							</Col>
						</Row>
					</Container>
				</Jumbotron>
				<Modal fade isOpen={this.state.showModal} toggle={this.toggleErrorModal}>
					<ModalHeader toggle={this.toggleErrorModal}>
						Error Title
					</ModalHeader>
					<ModalBody>
						Looks like there was a problem. (╥﹏╥)<br />(╯°□°）╯︵ ┻━┻
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggleErrorModal}>Close</Button>
					</ModalFooter>
				</Modal>
			</main>
		);
	}
}
