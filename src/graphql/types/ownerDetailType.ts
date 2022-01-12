import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'
import websiteType from '../types/websiteType';

export default new GraphQLObjectType({
    name: "ownerDetail",
    description: "",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)  },
        name: { type: GraphQLNonNull(GraphQLString) },
        websites: { type: GraphQLList(websiteType) }
    })
})