export const JSONMessage = (messageType, data) => {
	return JSON.stringify([
		messageType,
		data,
	]);
};
