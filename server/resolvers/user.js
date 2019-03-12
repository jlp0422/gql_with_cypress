module.exports = {
	Query: {
		user: (parent, { id }, { models }) => {
			return models.users[id]
		},
		users: (parent, args, { models }) => {
			return Object.values(models.users)
		},
		me: (parent, args, { me }) => {
			return me
		}
	},

	User: {
		messages: (user, args, { models }) => {
			return Object.values(models.messages).filter(
				message => message.userId === user.id
			)
		}
	}
}
