# GraphQL is a query language for API's and also runtime for executing those queries with your existing data.

# graphQL is not tied down to any specific client or DB or framework. it is a standalone library

In rest api we have multiple endpoints for request/response but in graphql we use only a single end point
In GraphQL, both queries and mutations are types of operations that clients can perform on the server to interact with the data.

# install and import to use graphql with apollo server

 import { ApolloServer } from '@apollo/server';
 import { startStandaloneServer } from '@apollo/server/standalone';

# server creation

const server = new ApolloServer({});

# server start and assign port

const { url } = await startStandaloneServer(server, {
listen: { port: 4000 }, // to listen on port
});

# typeDefs

-- type definitions are the types given by the author and which build up to schema of graphql

# int, string, boolean, float, ID are the somes of the types in graphql while defining typeDefs

# type : is used to create the type definitions

type Game{
id: ID,
title: String,
platform: [String], #array of string as there are diff platforms of games
}

# Query type definition
every graphql schema needs to have a type Query it is the entry point of the schema and specifies return end points
 we write all our specified type definitions in the Query type

# resolvers : they return the data and they handle the data

-- resolvers can only be directed to what defined in Query type definition
-- const resolvers = {
//resolvers are used to handle the data and respond to queries and it is done to type Query
Query: {
games: () => db.games,
authors: () => db.authors,
reviews: () => db.reviews,
},
};

# query variable

-- query variable is like a param we pass to fetch specific user details
type Query{
ex: review(id:1):review}

# resolver parameters : there are three parameters for resolvers

ChatGPT

In resolvers for GraphQL:

    # Parent: Represents the object that contains the field being resolved. Useful for resolving nested fields.
    # Arguments: Contains the arguments passed to the field in the query.
    # Context: A shared state or data passed between resolvers. Useful for authentication, database access, or other shared functionality.

# Relationship in data

 every type can be related to some type based on natural intuition
 and we can display all in one request instead of sending multiple request for different end points
 this will make sure we get data in nested queries

# In apollo sandbox : $ is variables to pass query variable

 query ReviewQuery($id:ID!){
Review(id:$id){
id
}
}
mutation deleteMutation($id:ID!){
    deleteGame(id:$id){
id,title,platform
    }
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push();
      return game;
    },

}

# Mutation : this is used to create or modify the database

 we use type Mutation in schema
Adding something using mutation
type Mutation{
addGame(game: AddGameInput!): Game,
deleteGame(id: ID!): [Game],
}
input AddGameInput {
title: String!,
platform: [String!]!,
}

edit

updateGame(id: ID!, edits: EditGameInput): Game,
input EditGameInput {

        title: String,
        platform: [String!]!,
    }
