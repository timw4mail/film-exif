// eslint-disable-next-line
global.eval = () => {};

// Do app initialization and event handling
require('./app');

// Initialize websockets
require('./websocket-events');
