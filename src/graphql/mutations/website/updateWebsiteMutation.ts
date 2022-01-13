import {
    GraphQLInt,
    GraphQLString
} from 'graphql'
import websiteType from '../../types/websiteType';
import updateWebsiteResolver from '../../resolvers/website/updateWebsiteResolver';

export const updateWebsiteMutation = { 
    type: websiteType,
    args: { 
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        ownerId: { type: GraphQLInt },
    },
    resolve: updateWebsiteResolver
}

export default updateWebsiteMutation