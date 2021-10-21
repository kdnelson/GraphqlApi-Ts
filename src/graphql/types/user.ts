import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql'

export default new GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: GraphQLInt },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ip_address: { type: GraphQLString },
    })
})