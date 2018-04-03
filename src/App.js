import { BrowserRouter } from 'inferno-router';
import { Routes } from './Routes';

export const App = () => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
);
