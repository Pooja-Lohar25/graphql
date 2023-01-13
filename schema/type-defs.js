const {gql}  = require('apollo-server')



//these define the type of queries that are to be made and the type of objects that can be queried
const typeDefs = gql`
#this is the definition of users....
type Users {
    id: ID! # ! means it can not be null
    name: String!
    username: String!
    age: Int!
    nationality: String!
}

type Query {
    users: [Users!]! #if 'users' query is  made it would return a list of users as per the definition 
    
}
`
module.exports = {typeDefs}