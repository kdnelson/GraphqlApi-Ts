import {
    GraphQLString
} from 'graphql'
import ownerType from '../../types/ownerType';
import createOwnerResolver from '../../resolvers/owner/createOwnerResolver';

export const createOwnerMutation = {
    type: ownerType,
    args: {
        name: { type: GraphQLString },
    },
    resolve: createOwnerResolver
}

export default createOwnerMutation