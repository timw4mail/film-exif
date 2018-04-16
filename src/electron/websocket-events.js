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
					const filemap = [];
					message.forEach(async file => {
						const tags = await getExifTags(file);
						console.info(tags);
						filemap[file] = tags;
					});
					ws.send(JSONMessage('parsed-exif-tags', filemap));
					break;

				default:
					return ws.send(JSONMessage('server-log', [type, message]));
			}
		});
	});
};

function getExifTags (imgPath) {
	return exiftool.read(imgPath);
}
