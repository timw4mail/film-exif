const {app, BrowserWindow} = require('electron');
const log = require('electron-log');

log.transports.file.level = false;
log.transports.console.level = 'info';

const path = require('path');
const url = require('url');

// eslint-disable-next-line
const WebSocket = require('ws');

// eslint-disable-next-line
global.eval = () => {};

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		webPreferences: {
			contextIsolation: true,
			nodeIntegration: false,
		},
	});

	// load the index.html of the app.
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '/../../build/index.html'),
		protocol: 'file:',
		slashes: true,
	});
	mainWindow.loadURL(startUrl);
	// Open the DevTools.
	mainWindow.webContents.openDevTools({
		mode: 'bottom',
	});

	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.on('browser-window-created', () => {
	log.info('New browser window created');
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

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
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
require('./websocket-events')(wss);
