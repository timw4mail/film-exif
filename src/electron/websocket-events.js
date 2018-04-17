const {getExifTags} = require('./exif-helpers');
/**
 * Websocket event handlers
 */
const {JSONMessage} = require('../helpers/web-socket');
// eslint-disable-next-line
const WebSocket = require('ws');

const wss = new WebSocket.Server({
	perMessageDeflate: false,
	port: 65432,
});

wss.broadcast = (data) => {
	wss.clients.forEach(client => {
		if (client.readyState === WebSocket.OPEN) {
			client.send(data);
		}
	});
};

wss.on('connection', ws => {
	ws.send(JSONMessage('server-log', 'Connected to client!'));
	ws.on('message', async (...args) => {
		const [type, message] = JSON.parse(args);
		switch (type) {
			case 'dropped-files':
				const filemap = await Promise.all(
					message.map(file => getExifTags(file))
				);
				wss.broadcast(JSONMessage('parsed-exif-tags', await filemap));
				break;

			default:
				return ws.send(JSONMessage('server-log', [type, message]));
		}
	});
});
