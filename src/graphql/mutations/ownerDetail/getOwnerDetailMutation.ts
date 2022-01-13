import { 
    GraphQLInt,
    GraphQLNonNull 
} from 'graphql';
import ownerDetailType from '../../types/ownerDetailType';
import getOwnerDetailResolver from '../../resolvers/ownerDetail/getOwnerDetailResolver';

export const getOwnerDetailMutation = {
    type: ownerDetailType,
    args: { 
        id: { type: GraphQLNonNull(GraphQLInt) }
    },
    resolve(parent: any, args: {[argName: string]: any}) {
        return getOwnerDetailResolver(parent, args.id)
    }
}

export default getOwnerDetailMutation