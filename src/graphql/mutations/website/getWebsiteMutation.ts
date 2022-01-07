import {
    GraphQLInt, 
    GraphQLNonNull
} from 'graphql'
import websiteType from '../../types/websiteType';
import getWebsiteResolver from '../../resolvers/website/getWebsiteResolver';

export const getWebsiteMutation = {
    type: websiteType,
    args: { 
        id: { type: GraphQLNonNull(GraphQLInt) }
    },
    resolve(parent: any, args: {[argName: string]: any}) {
        return getWebsiteResolver(parent, args.id)
    }
}

export default getWebsiteMutation