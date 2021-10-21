const stubData = require("./data/stub_data.json");
const user = require('./types/user');
import {
    GraphQLObjectType, 
    GraphQLSchema, 
    GraphQLInt, 
    GraphQLString, 
    GraphQLList
} from 'graphql'

export const rootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllUsers: { 
            type: new GraphQLList(user),
            args: { id: { type: GraphQLInt }},
            resolve(parent, args) { return stubData }
        }
    }
})

export const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: { 
            type: user,
            args: { 
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                ip_address: { type: GraphQLString }
            },
            resolve(parent, args) { 
                stubData.push({
                    id: stubData.length + 1,
                    first_name: args.first_name,
                    last_name: args.last_name,
                    email: args.email,
                    gender: args.gender,
                    ip_address: args.ip_address,
                });
                return args
            }
        },
        updateUser: { 
            type: user,
            args: { 
                id: { type: GraphQLInt },
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                email: { type: GraphQLString },
                gender: { type: GraphQLString },
                ip_address: { type: GraphQLString }
            },
            resolve(parent, args) {
                stubData.forEach( (item: any, index: any) => {
                    if(item.id === args.id) {
                        stubData[index].first_name = args.first_name
                        stubData[index].last_name = args.last_name
                        stubData[index].email = args.email
                        stubData[index].gender = args.gender
                        stubData[index].ip_address = args.ip_address
                    }        
                  });
            }
        },
        deleteUser: { 
            type: user,
            args: { 
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                stubData.forEach( (item: any, index: any) => {
                    if(item.id === args.id) {
                        stubData.splice(index, 1);
                    }        
                  });
            }
        }
    }
})

export default new GraphQLSchema({ query: rootQuery, mutation: mutation })