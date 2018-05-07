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
import { JSONMessage } from '//helpers/web-socket';

export class HomeView extends Component {
	constructor (props) {
		super(props);

		this.state = {
			showModal: false,
		};

		this.toggleErrorModal = this.toggleErrorModal.bind(this);
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

		let newTransfer = { ...e.dataTransfer };
		console.info(newTransfer);

		window.clientWS.send(JSONMessage('dropped-files', draggedFiles));
	}

	showErrorDialog () {
		window.clientWS.send(JSONMessage(
			'show-error-box',
			'Looks like there was a problem. (╥﹏╥) \n (╯°□°）╯︵ ┻━┻'
		));
	}

	showOpenDialog () {
		window.clientWS.send(JSONMessage('show-open-dialog', {}));
	}

	showSaveDialog () {
		window.clientWS.send(JSONMessage('show-save-dialog', {}));
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
					</Container>
				</Jumbotron>
				<Modal fade isOpen={this.state.showModal} toggle={this.toggleErrorModal}>
					<ModalHeader toggle={this.toggleErrorModal}>
						Error Title
					</ModalHeader>
					<ModalBody>
						Body of error message
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggleErrorModal}>Close</Button>
					</ModalFooter>
				</Modal>
			</main>
		);
	}
}
