import { render } from 'inferno';
import { Provider } from 'inferno-redux';

import configureStore from './configureStore';
import { App } from './App';
import WSCache from './wsCache';

const WEB_SOCKET = new WebSocket('ws://localhost:65432/');
window.clientWS = WEB_SOCKET;
window.wsCache = new WSCache(WEB_SOCKET);

render(<App />, document.getElementById('app'));
