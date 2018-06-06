import {app, BrowserWindow} from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';
import log from 'electron-log';
import path from 'path';
import url from 'url';

log.transports.file.level = false;
log.transports.console.level = 'info';

const DEV_MODE = process.env.NODE_ENV === 'development';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
	// Create the browser window.
	if (DEV_MODE) {
		mainWindow = new BrowserWindow();
	} else {
		mainWindow = new BrowserWindow({
			webPreferences: {
				contextIsolation: true,
				nodeIntegration: false,
			},
		});
	}

	// Open the DevTools.
	if (DEV_MODE) {
		installExtension(REACT_DEVELOPER_TOOLS)
			.then((extensionName) => console.log(`Added Extension:  ${extensionName}`))
			.catch((err) => console.log('An error occurred: ', err));

		mainWindow.webContents.openDevTools({
			mode: 'bottom',
		});
	}

	// load the index.html of the app.
	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '/../../build/index.html'),
		protocol: 'file:',
		slashes: true,
	});
	mainWindow.loadURL(startUrl);

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
