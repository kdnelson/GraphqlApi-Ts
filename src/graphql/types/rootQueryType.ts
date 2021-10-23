import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql'
import userType from './userType';
const stubData = require("../data/stub_data.json");

export default new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getUsers: { 
            type: new GraphQLList(userType),
            args: { id: { type: GraphQLInt }},
            resolve(parent, args) { return stubData }
        }
    }
})