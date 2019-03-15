require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')

const schema = require('./schema')
const resolvers = require('./resolvers')
const { sequelize, models } = require('./models')

const app = express()
app.use(cors())

const server = new ApolloServer({
	typeDefs: schema,
	resolvers,
	formatError: error => {
		const message = error.message
			.replace('SequelizeValidationError: ', '')
			.replace('Validation error: ', '')

		return {
			...error,
			message
		}
	},
	context: async () => ({
		models,
		me: await models.User.findByLogin('jeremyphilipson'),
		secret: process.env.SECRET
	})
})

server.applyMiddleware({ app, path: '/graphql' })

const eraseOnSync = true

sequelize.sync({ force: eraseOnSync }).then(async () => {
	if (eraseOnSync) {
		createUsersWithMessages()
	}

	app.listen({ port: 8000 }, () => {
		console.log(`listening on port 8000/graphql`)
	})
})

const createUsersWithMessages = async () => {
	await models.User.create(
		{
			username: 'jeremyphilipson',
			email: 'jeremy@jeremy.com',
			password: 'jeremyp',
			messages: [{ text: 'Likes to learn GraphQL' }]
		},
		{ include: [models.Message] }
	)

	await models.User.create(
		{
			username: 'carolynfine',
			email: 'carolyn@carolyn.com',
			password: 'carolyn',
			messages: [
				{ text: 'Is watching "This is Us"' },
				{ text: 'Loves her beas' }
			]
		},
		{ include: [models.Message] }
	)
}
