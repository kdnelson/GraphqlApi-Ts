
// import {
//     GraphQLInt,
//     GraphQLString
// } from 'graphql'
// import updateUserResolver from '../../resolvers/user/updateUserResolver';
// import userType from '../../types/userType';

// export const updateUserMutation = { 
//     type: userType,
//     args: { 
//         id: { type: GraphQLInt },
//         first_name: { type: GraphQLString },
//         last_name: { type: GraphQLString },
//         email: { type: GraphQLString },
//         gender: { type: GraphQLString },
//         ip_address: { type: GraphQLString }
//     },
//     resolve(parent: any, args: {[argName: string]: any}) {
//         updateUserResolver(parent, args)
//     }
// }

// export default updateUserMutation