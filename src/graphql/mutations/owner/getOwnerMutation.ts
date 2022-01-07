import {
    GraphQLInt, 
    GraphQLNonNull
} from 'graphql'
import ownerType from '../../types/ownerType';
import getOwnerResolver from '../../resolvers/owner/getOwnerResolver';

export const getOwnerMutation = {
    type: ownerType,
    args: { 
        id: { type: GraphQLNonNull(GraphQLInt) }
    },
    resolve(parent: any, args: {[argName: string]: any}) {
        return getOwnerResolver(parent, args.id)
    }
}

export default getOwnerMutation