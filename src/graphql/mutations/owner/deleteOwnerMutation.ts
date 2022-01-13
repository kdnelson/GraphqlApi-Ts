import {
    GraphQLInt
} from 'graphql'
import ownerType from '../../types/ownerType';
import deleteOwnerResolver from '../../resolvers/owner/deleteOwnerResolver';

export const deleteOwnerMutation = {
    type: ownerType,
    args: { 
        id: { type: GraphQLInt }
    },
    resolve: deleteOwnerResolver
}

export default deleteOwnerMutation