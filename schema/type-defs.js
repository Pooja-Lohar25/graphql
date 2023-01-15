const {gql}  = require('apollo-server')



//these define the type of queries that are to be made and the type of objects that can be queried
const typeDefs = gql`
    #this is the definition of users....
    type User {
        id: ID! # ! means it can not be null
        name: String!
        username: String!
        age: Int!
        nationality: String
        favMovId: [Int]
        favmovies: [Movie]
    }

    type Query {
        users: [User!]! #if 'users' query is  made it would return a list of users as per the definition 
        user(id:ID!): User!
    }

    type Movie {
        id: ID!
        name: String!
        genre: String!
    }
    input createUserIn {
        name: String!
        username: String!
        age: Int!
        nationality: String = "Indian"
        favMovId: [Int]
    }
    type Mutation {
        createUser(input: createUserIn): User!
    }
`
module.exports = {typeDefs}