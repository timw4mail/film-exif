const { spawn } = require('child_process');
const log = require('electron-log');
const net = require('net');
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;
log.transports.file.level = false;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port}, () => {
	client.end();
	if (!startedElectron) {
		log.info('starting electron');
		startedElectron = true;
		const instance = spawn('node', ['node_modules/electron/cli.js', '.'], {
			env: {
				...process.env,
			},
			stdio: 'inherit',
		});

		instance.on('message', (message, sendHandle) => {
			console.log(message, sendHandle);
		});
	}
});

tryConnection();

client.on('error', (error) => {
	if (error) {
		console.error(error);
		return;
	}

	setTimeout(tryConnection, 1000);
});
