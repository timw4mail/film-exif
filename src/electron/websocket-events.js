/**
 * Websocket event handlers
 */

module.exports = (wss) => {
	wss.on('open', ws => {
		wss.send('server-log', 'Connected to client!');

		wss.on('dropped-files', e => {
			wss.send('recieved-dropped-files', e);
		});
	});
};
