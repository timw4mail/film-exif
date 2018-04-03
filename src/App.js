import { BrowserRouter, Link, NavLink } from 'inferno-router';
import {
	Container,
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
} from './components/Bootstrap';
import { Routes } from './Routes';

export const App = () => (
	<BrowserRouter>
		<Container className="full-height">
			<Navbar className="sticky-top" color="dark" dark expandable="sm">
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
		</Container>
	</BrowserRouter>
);
