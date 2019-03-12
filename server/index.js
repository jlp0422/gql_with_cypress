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
	context: async () => ({
		models,
		me: await models.User.findByLogin('jeremyphilipson')
	})
})

server.applyMiddleware({ app, path: '/graphql' })

const eraseOnSync = true

sequelize.sync({ force: eraseOnSync })
	.then(async () => {
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
				messages: [
					{
						text: 'Published the Road to learn React',
					},
				],
			},
			{
				include: [models.Message],
			},
		);

		await models.User.create(
			{
				username: 'carolynfine',
				messages: [
					{
						text: 'Happy to release ...',
					},
					{
						text: 'Published a complete ...',
					},
				],
			},
			{
				include: [models.Message],
			},
		);
	};
