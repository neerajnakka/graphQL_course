//creates a server and configure it and used to handle the data and respond to queries
import { ApolloServer } from '@apollo/server';
// server to listen for requests
import { startStandaloneServer } from '@apollo/server/standalone';
import db from './db.js';
import { typeDefs } from './schema.js';

const resolvers = {
  //resolvers are used to handle the data and respond to queries and it is done to type Query
  Query: {
    games: () => db.games,
    authors: () => db.authors,
    reviews: () => db.reviews,
    // review(parent, args, context)
    review(args) {
      return db.reviews.find((review) => review.id === args.id); // args contains the query variables passed in Query type
    },
  },
  //resolvers for nested or related data
  Game: {
    reviews: (parent) =>
      db.reviews.filter((review) => review.gameId === parent.id),
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id !== args.id);
      return db.games;
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      db.games.push();
      return game;
    },
    updateGame(_, args) {
      db.games = db.games.map((game) => {
        if (game.id !== args.id) {
          return { ...g, ...args.edits };
        }
        return game;
      });
      return db.games.find((game) => game.id === args.id);
    },
  },
};
//server setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
//server start
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }, // to listen on port
});
console.log(`🚀  Server ready at port`, 4000);
