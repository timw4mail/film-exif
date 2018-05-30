import * as _ from 'lodash'
import { JSONMessage } from '//helpers/web-socket';

export class wsCache {
	constructor (ws) {
		this.ws = ws

		this.ws.addEventListener('open', this.onWebSocketOpen);
		this.ws.addEventListener('message', this.onWebSocketMessage);
		this.ws.addEventListener('close', this.onWebSocketClose);

		// Websocket channels
		// These hold previous messages if they are needed later
		this.slots = {
			'default': [],
		}

		// Send messages
		this.sent = {
			'default': [],
		}

		//  Subscribers
		this.listeners = {
			'default': [console.info],
		}

		_.bindAll(this, [
			'onWebSocketOpen',
			'onWebSocketClose',
			'onWebSocketMessage',
			'publish',
			'send',
			'sendJSON',
			'subscribe',
		])
	}

	onWebSocketOpen () {
		window.wsCache.publish('default', 'Websocket opened');
	}

	onWebSocketClose () {
		console.info('WebSocket closed');
	}

	/**
	 * Callback for receiving a websocket message
	 *
	 * @param {mixed} message
	 */
	onWebSocketMessage (message) {
		try {
			const messageObject = JSON.parse(message.data);
			const [slot, data] = messageObject;
			window.wsCache.publish(slot, data);
		} catch (e) {
			window.wsCache.publish('default', message.data);
		}
	}

	/*
	 * Send a recieved websocket message to the appropriate listener(s)
	 *
	 * @param {string} slot
	 * @param {mixed} data
	 * @return {void}
	 */
	publish (slot, data) {
		if (!this.listeners[slot] || data === undefined) {
			return;
		}

		this.slots[slot].push(data);

		this.listeners[slot].forEach(listener => {
			listener(data)
		});

		console.info(this.slots);
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

		const listenerIndex = this.listeners[slot].push(cb) -1;

		return {
			remove: () => {
				delete this.listeners[slot][listenerIndex];
			}
		}
	}
}

export default wsCache;
