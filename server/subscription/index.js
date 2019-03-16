const { PubSub } = require('apollo-server')
const MESSAGE_EVENTS = require('./message')

const pubsub = new PubSub()

module.exports = {
	EVENTS: {
		MESSAGE: MESSAGE_EVENTS
	},
	pubsub
}
