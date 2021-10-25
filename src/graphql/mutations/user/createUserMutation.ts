import {
    GraphQLString
} from 'graphql'
import userType from '../../types/userType';
import createUserResolver from '../../resolvers/user/createUserResolver';

export const createUserMutation = {
    type: userType,
    args: { 
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        email: { type: GraphQLString },
        gender: { type: GraphQLString },
        ip_address: { type: GraphQLString }
    },
    resolve: createUserResolver
}

export default createUserMutation