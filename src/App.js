import { Component } from 'inferno';
import { BrowserRouter, Link, NavLink } from 'inferno-router';
import {
	Container,
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
} from '//components/Bootstrap';
import { Routes } from '//Routes';
import { createWsCache } from '//WSCache';

export class App extends Component {
	constructor (props, context) {
		super(props, context);

		this.ws = createWsCache();
	}

	getChildContext () {
		return {
			ws: this.ws,
		};
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
					<Routes/>
				</Container>
			</BrowserRouter>
		);
	}
}
