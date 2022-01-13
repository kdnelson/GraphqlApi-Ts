import {
    GraphQLInt,
    GraphQLString
} from 'graphql'
import ownerType from '../../types/ownerType';
import updateOwnerResolver from '../../resolvers/owner/updateOwnerResolver';

export const updateOwnerMutation = { 
    type: ownerType,
    args: { 
        id: { type: GraphQLInt },
        name: { type: GraphQLString }
    },
    resolve: updateOwnerResolver
}

export default updateOwnerMutation