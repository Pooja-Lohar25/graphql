/**
 * type Query {
    users: [users!]!  
    since 'users' query should return list of users...this function is defined in resolvers ....in short resolvers 
    define how to process a query and give the results. 
}
*/
const {userlist} = require('../fakedata.js')
const {movielist} = require('../fakedata.js')
const lod  = require('lodash')
const { update } = require('lodash')
const resolvers = {  // this single object would contain all the resolvers of the api
    Query:{//highest level field
        users:()=>{
            return userlist
        },
        /**
         *two resolvers cannot have same name--nothing like resolver overloading
         */
        user: (parent,args)=>{ //parameterised query
            const id = args.id;
            const user =lod.find(userlist,{id:Number(id)})
            return user
        }
        
    } , 
    /**handling parent
     * when any query returns a User type of object it will initiate this resolver
     * now for this the 'parent' becomes whatever is returned by the previous query
     */
    User: {
        favmovies:(parent)=>{
            return movielist.filter((movie)=>{
                return parent.favMovId.includes(movie.id)
            })
        }
    },
    Mutation:{
        createUser: (parent,args)=>{
            const user = args.input
            const lastid =  userlist.length
            user.id = lastid +1
            userlist.push(user)
            return user
        },
        updateUsername: (parent,args)=>{
            // const id = Number(args.input.id)
            // const newusername = args.input.newusername
            const {id,newusername} = args.input
            let updatedUser
            userlist.forEach((user)=>{
                if(user.id===Number(id)){
                    user.username = newusername
                    updatedUser = user                       
                }
                
            });
            return updatedUser
            
        }
    }
}

module.exports = {resolvers}