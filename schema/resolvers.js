/**
 * type Query {
    users: [users!]!  
    since 'users' query should return list of users...this function is defined in resolvers ....in short resolvers 
    define how to process a query and give the results. 
}
*/
const {userlist} = require('../fakedata.js')

const resolvers = {  // this single obect would contain all the resolvers of the api
    Query:{//highest level field
        users() {
            return userlist
        }
    } 
        
    
}

module.exports = {resolvers}