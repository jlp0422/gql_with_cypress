const { ForbiddenError } = require('apollo-server')
const { skip } = require('graphql-resolvers')

const isAuthenticated = (parent, args, { me }) =>
	me ? skip : new ForbiddenError('Not authenticated as a user.')

const isMessageOwner = async (parent, { id }, { models, me }) => {
	const message = await models.Message.findById(id, { raw: true })

	if (message.userId !== me.id) {
		throw new ForbiddenError('Not authenticated as message owner.')
	}
}

module.exports = {
	isAuthenticated,
	isMessageOwner
}
