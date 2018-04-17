/**
 * Websocket event handlers
 */
const {ExifTool} = require('exiftool-vendored');
const {JSONMessage} = require('../helpers/web-socket');

const exiftool = new ExifTool();

module.exports = (wss) => {
	wss.on('connection', ws => {
		ws.send(JSONMessage('server-log', 'Connected to client!'));
		ws.on('message', (...args) => {
			const [type, message] = JSON.parse(args);
			switch (type) {
				case 'dropped-files':
					const filemap = message.map(async file => {
						const tags = await getExifTags(file);
						// console.info('Parsed tags', JSON.stringify(tags));
						return JSON.parse(JSON.stringify(tags));
					});
					wss.broadcast(JSONMessage('parsed-exif-tags', filemap));
					break;

				default:
					return ws.send(JSONMessage('server-log', [type, message]));
			}
		});
	});
};

async function getExifTags (imgPath) {
	await exiftool.read(imgPath);
}
