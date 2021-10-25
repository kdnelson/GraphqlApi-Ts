import {
    GraphQLInt
} from 'graphql'
import deleteUserResolver from '../../resolvers/user/deleteUserResolver';
import userType from '../../types/userType';

export const deleteUserMutation = {
    type: userType,
    args: { 
        id: { type: GraphQLInt }
    },
    resolver: deleteUserResolver
}

export default deleteUserMutation