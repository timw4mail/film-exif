import * as _ from 'lodash';
import { Component } from 'inferno';
import { BrowserRouter, Link, NavLink } from 'inferno-router';
import { Loader } from './components';
import {
	Container,
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
} from './components/Bootstrap';
import { Routes } from './Routes';

export class App extends Component {
	constructor (props) {
		super(props);

		this.state = {
			webSocketLoaded: false,
		};

		_.bindAll(this, [
			'onWebSocketOpen',
			'onWebSocketClose',
		]);
	}

	componentDidMount () {
		window.clientWS = new WebSocket('ws://localhost:65432/');

		window.clientWS.addEventListener('open', this.onWebSocketOpen);
		window.clientWS.addEventListener('message', console);
		window.clientWS.addEventListener('close', this.onWebSocketClose);
	}

	componentWillUnmount () {
		if (window.clientWS) {
			window.clientWS.close();
		}
	}

	onWebSocketOpen () {
		this.setState({
			webSocketLoaded: true,
		});

		window.clientWS.onmessage = message => {
			console.info(JSON.parse(message.data));
		};
	}

	onWebSocketClose () {
		console.log('WebSocket closed');
	}

	render () {
		return (
			<BrowserRouter>
				<Container className="full-height" tag="bs-container">
					<Navbar className="static-top" color="dark" dark expandable="sm">
						<NavbarBrand to="/" tag={Link}>Film Exif</NavbarBrand>
						<Nav fill pills>
							<NavItem>
								<NavLink className="nav-link" to="/camera/list">Cameras</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/film/add">Films</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/oops">Oops</NavLink>
							</NavItem>
						</Nav>
					</Navbar>
					<Routes />
					<Loader title="Connecting to WebSocket" hidden={this.state.webSocketLoaded} />
				</Container>
			</BrowserRouter>
		);
	}
}
