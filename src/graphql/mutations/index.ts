import {
    GraphQLObjectType
} from 'graphql'
import createOwnerMutation from './owner/createOwnerMutation'
import getOwnerMutation from './owner/getOwnerMutation'
import createWebsiteMutation from './website/createWebsiteMutation'
import getWebsiteMutation from './website/getWebsiteMutation'
import updateOwnerMutation from './owner/updateOwnerMutation'
import updateWebsiteMutation from './website/updateWebsiteMutation'
import deleteOwnerMutation from './owner/deleteOwnerMutation'
import deleteWebsiteMutation from './website/deleteWebsiteMutation'
import getOwnerDetailMutation from './ownerDetail/getOwnerDetailMutation'

export default new GraphQLObjectType({
    name: "Mutations",
    description: "",
    fields: {
        getOwner: getOwnerMutation,
        createOwner: createOwnerMutation,
        updateOwner: updateOwnerMutation,
        deleteOwner: deleteOwnerMutation,

        getWebsite: getWebsiteMutation,
        createWebsite: createWebsiteMutation,
        updateWebsite: updateWebsiteMutation,
        deleteWebsite: deleteWebsiteMutation,

        getOwnerDetails: getOwnerDetailMutation,
    }
})