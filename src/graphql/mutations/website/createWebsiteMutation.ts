import {
    GraphQLString
} from 'graphql'
import websiteType from '../../types/websiteType';
import createWebsiteResolver from '../../resolvers/website/createWebsiteResolver';

export const createWebsiteMutation = {
    type: websiteType,
    args: { 
        name: { type: GraphQLString },
    },
    resolve: createWebsiteResolver
}

export default createWebsiteMutation