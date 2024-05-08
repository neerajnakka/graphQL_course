export const typeDefs = `#graphql
    type  Game{
        id: ID!,
        title: String!,
        platform: [String!]!, #array of string as there are diff platforms of games
        #relation in data
        reviews: [Review!], # a game can have many reviews
    }
    type Review{
        id: ID!,
        rating: Int!,
        content: String!,
        #relation in data
        author: Author!,
        game: Game!,
    }
    type Author{
        id: ID!,
        name: String!,
        verified: Boolean!,
        #relation in data
        reviews: [Review!],
    }
    type Query{
        reviews: [Review],
        review(id: ID!): Review,
        games: [Game],
        authors: [Author],
    }
    type Mutation{
        addGame(game: AddGameInput!): Game,
        deleteGame(id: ID!): [Game],
        updateGame(id: ID!, edits: EditGameInput): Game,
    }
    input AddGameInput {
        title: String!,
        platform: [String!]!,
    }
    input EditGameInput {
       
        title: String,
        platform: [String!]!,
    }



`;
//int, string, boolean, float, ID are the somes of the types in graphql
//type is used to create the type definitions
// # Query type definition
// -- every graphql schema needs to have a type Query it is the entry point of the schema and specifies return end points
