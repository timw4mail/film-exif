import App from './App';
import { render } from 'inferno';

it('renders without crashing', () => {
	const div = document.createElement('div');
	render(<App />, div);
});
