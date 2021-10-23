import {
    GraphQLObjectType,  
    GraphQLInt, 
    GraphQLString
} from 'graphql'
import userType from '../types/userType';
const stubData = require("../data/stub_data.json");

export default new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: { 
            type: userType,
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
            type: userType,
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
            type: userType,
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