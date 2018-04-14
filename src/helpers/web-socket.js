const JSONMessage = (messageType, data) => {
	// return new Blob([messageType, JSON.stringify(data)], {type: 'application/json'});
	return JSON.stringify([
		messageType,
		data,
	]);
};

module.exports = {
	JSONMessage,
};
