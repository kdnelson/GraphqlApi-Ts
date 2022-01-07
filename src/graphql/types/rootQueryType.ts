import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import ownerType from './ownerType';
import websiteType from './websiteType';
import context from './../data/context'

// Another less complicated data source
//import userType from './userType';
//const stubData = require("../data/stub_data.json");

export default new GraphQLObjectType({
    name: "RootQueryType",
    description: "",
    fields: {
        getOwners: { 
            type: new GraphQLList(ownerType),
            description: '',
            args: { id: { type: GraphQLInt }},
            resolve() { return context.owners }
        },
        getWebsites: { 
            type: new GraphQLList(websiteType),
            description: '',
            args: { id: { type: GraphQLInt }},
            resolve() { return context.websites }
        }
    }
})