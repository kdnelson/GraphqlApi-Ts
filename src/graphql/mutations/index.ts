import {
    GraphQLObjectType,
} from 'graphql'
import createUserMutation from './user/createUserMutation';
import deleteUserMutation from './user/deleteUserMutation';
import updateUserMutation from './user/updateUserMutation';

export default new GraphQLObjectType({
    name: "Mutations",
    fields: {
        createUser: createUserMutation,
        deleteUser: deleteUserMutation,
        updateUser: updateUserMutation
    }
})