/**
 * Websocket event handlers
 */
import {dialog, BrowserWindow} from 'electron';
// eslint-disable-next-line
import WebSocket from 'ws';

import {getExifTags} from './exif-helpers';
import {JSONMessage} from '../helpers/web-socket';

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
		try {
			const [type, message] = JSON.parse(args);
			switch (type) {
				case 'dropped-files':
					const filemap = await Promise.all(
						message.map(file => getExifTags(file))
					);
					wss.broadcast(JSONMessage('parsed-exif-tags', await filemap));
					break;

				case 'show-open-dialog':
					const files = dialog.showOpenDialog(BrowserWindow.getFocusedWindow(), {
						filters: [{
							extension: ['jpg', 'jpeg', 'tif', 'tiff', 'dng'],
							name: 'EXIF image types',
						}, {
							extensions: ['*'],
							name: 'All Files',
						}],
						properties: [
							'openFile',
							'multiSelections',
						],
					});
					wss.broadcast(JSONMessage('selected-files', files));
					break;

				case 'show-save-dialog':
					const saveFile = dialog.showSaveDialog(BrowserWindow.getFocusedWindow());
					wss.broadcast(JSONMessage('save-file-location', saveFile));
					break;

				case 'show-error-box':
					dialog.showErrorBox('An Error has Occured',	message);
					break;

				default:
					return ws.send(JSONMessage('server-log', [type, message]));
			}
		} catch (e) {
			console.info(args);
		}
	});
});
