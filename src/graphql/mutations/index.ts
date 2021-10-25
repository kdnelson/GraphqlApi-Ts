import {
    GraphQLObjectType,
    GraphQLInt
} from 'graphql'
import createUserMutation from './user/createUserMutation';

import userType from '../types/userType';
import context from "../data/context";
import deleteUserMutation from './user/deleteUserMutation';

import updateUserMutation from './user/updateUserMutation';

export default new GraphQLObjectType({
    name: "Mutations",
    fields: {
        createUser: createUserMutation,
        deleteUser: { 
            type: userType,
            args: { 
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                context.forEach( (item: any, index: any) => {
                    if(item.id === args.id) {
                        context.splice(index, 1);
                    }        
                });
            }
        },
        updateUser: updateUserMutation
    }
})