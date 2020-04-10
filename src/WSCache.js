import bindAll from 'lodash-es/bindAll';
import { JSONMessage } from '//helpers/web-socket';

class WSCache {
	constructor (ws) {
		this.ws = ws;

		// Websocket channels
		// These hold previous messages if they are needed later
		this.slots = {
			'default': [],
		};

		// Send messages
		this.sent = {
			'default': [],
		};

		//  Subscribers
		this.listeners = {
			'default': [console.info],
			'server-log': [console.dir],
		};

		bindAll(this, [
			'onWebSocketClose',
			'onWebSocketMessage',
			'publish',
			'send',
			'sendJSON',
			'subscribe',
		]);

		this.ws.addEventListener('message', this.onWebSocketMessage);
		this.ws.addEventListener('close', this.onWebSocketClose);
		this.ws.addEventListener('error', console.error);
	}

	onWebSocketClose () {
		this.ws = null;
		console.info('WebSocket closed');
	}

	/**
	 * Callback for receiving a websocket message
	 *
	 * @param {mixed} message
	 */
	onWebSocketMessage (message) {
		// `this` is overwritten to be the web socket object,
		// so use the current instance object instead
		try {
			(() => {})();
			const messageObject = JSON.parse(message.data);
			WSCache.instance.publish(messageObject[0], messageObject[1]);
		} catch (e) {
			console.error('Error resolving web socket message', e);
			// console.error(message);
			WSCache.instance.publish('default', message.data);
		}
	}

	/*
	 * Send a received websocket message to the appropriate listener(s)
	 *
	 * @param {string} slot
	 * @param {mixed} data
	 * @return {void}
	 */
	publish (slot, data) {
		if (!this.listeners[slot] || data === undefined) {
			return;
		}

		if (this.slots[slot] === undefined) {
			this.slots[slot] = [];
		}

		this.slots[slot].push(data);

		this.listeners[slot].forEach(listener => {
			listener(data);
		});
	}

	/**
	 * Send a message to the websocket server
	 *
	 * @param {mixed} message
	 */
	send (message) {
		this.sent['default'].push(message);

		return this.ws.send(message);
	}

	/**
	 * Send a JSON-encoded message to the websocket server
	 *
	 * @param {string} slot
	 * @param {mixed} data
	 */
	sendJSON (slot, data = {}) {
		const sentSlots = Object.keys(this.sent);

		if (!sentSlots.includes(slot)) {
			this.sent[slot] = [];
		}

		this.sent[slot].push(data);

		return this.ws.send(JSONMessage(slot, data));
	}

	/**
	 * Subscribe to a websocket message type
	 *
	 * Returns an object with a `unsubscribe` method
	 *
	 * @param {string} slot
	 * @param {function} cb
	 */
	subscribe (slot, cb) {
		const slots = Object.keys(this.slots);
		// Create the slots and listener arrays
		if (!slots.includes(slot)) {
			this.slots[slot] = [];
			this.listeners[slot] = [];
		}

		this.listeners[slot].push(cb);
		const listenerIndex = this.listeners[slot].length - 1;

		return {
			remove: () => {
				delete this.listeners[slot][listenerIndex];
			},
		};
	}
}
WSCache.instance = null;

export function createWsCache () {
	if (WSCache.instance === null) {
		const ws = new WebSocket('ws://localhost:65432/');
		const instance = new WSCache(ws);
		WSCache.instance = instance;
		return instance;
	}

	return WSCache.instance;
}
