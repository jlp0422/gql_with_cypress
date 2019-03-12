const users = {
	1: {
		id: '1',
		username: 'jeremy',
		messageIds: [1]
	},
	2: {
		id: '2',
		username: 'carolyn',
		messageIds: [2]
	}
}

const messages = {
	1: {
		id: '1',
		text: 'Hello World',
		userId: '1'
	},
	2: {
		id: '2',
		text: 'By World',
		userId: '2'
	}
}

module.exports = {
	users,
	messages
}
