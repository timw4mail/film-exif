/**
 * Websocket event handlers
 */
const {JSONMessage} = require('../helpers/web-socket');

module.exports = (wss) => {
	wss.on('connection', ws => {
		ws.send(JSONMessage('server-log', 'Connected to client!'));

		ws.on('message', (...args) => {
			console.info(args);
		});

		ws.on('dropped-files', e => {
			ws.send(JSONMessage('recieved-dropped-files', e));
		});
	});
};
