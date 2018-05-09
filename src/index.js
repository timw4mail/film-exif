import { render } from 'inferno';
import { Provider } from 'inferno-redux';

import configureStore from './configureStore';
import { App } from './App';

const store = configureStore();

render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('app'));
