import {
    GraphQLObjectType,
    GraphQLList
} from 'graphql'

import ownerType from './ownerType';
import websiteType from './websiteType';
import context from './../data/context'
import ownerDetailType from './ownerDetailType';

export default new GraphQLObjectType({
    name: "RootQueryType",
    description: "",
    fields: {
        getOwners: { 
            type: new GraphQLList(ownerType),
            description: '',
            resolve() { return context.owners }
        },
        getWebsites: { 
            type: new GraphQLList(websiteType),
            description: '',
            resolve() { return context.websites }
        },
        getOwnerDetails: { 
            type: new GraphQLList(ownerDetailType),
            description: '',
            resolve() { return context.ownerDetails }
        }
    }
})