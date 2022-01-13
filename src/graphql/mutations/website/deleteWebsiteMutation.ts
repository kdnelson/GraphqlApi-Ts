import {
    GraphQLInt
} from 'graphql'
import ownerType from '../../types/ownerType';
import deleteWebsiteResolver from '../../resolvers/website/deleteWebsiteResolver';

export const deleteWebsiteMutation = {
    type: ownerType,
    args: { 
        id: { type: GraphQLInt }
    },
    resolve: deleteWebsiteResolver
}

export default deleteWebsiteMutation