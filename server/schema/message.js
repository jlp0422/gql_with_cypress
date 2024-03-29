const { gql } = require('apollo-server-express')

module.exports = gql`
	extend type Query {
		messages(cursor: String, limit: Int): MessageConnection!
		message(id: ID!): Message!
	}

	extend type Mutation {
		createMessage(text: String!): Message!
		deleteMessage(id: ID!): Boolean!
	}

	type MessageConnection {
		edges: [Message!]!
		pageInfo: PageInfo!
	}

	type PageInfo {
		endCursor: String!
		hasNextPage: Boolean!
	}

	type Message {
		id: ID!
		text: String!
		createdAt: Date!
		user: User!
	}

	extend type Subscription {
		messageCreated: MessageCreated!
	}

	type MessageCreated {
		message: Message!
	}
`
