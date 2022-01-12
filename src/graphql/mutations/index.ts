import {
    GraphQLObjectType
} from 'graphql'
import getOwnerMutation from './owner/getOwnerMutation'
import getOwnerDetailMutation from './ownerDetail/getOwnerDetailMutation'
import getWebsiteMutation from './website/getWebsiteMutation'

export default new GraphQLObjectType({
    name: "Mutations",
    description: "",
    fields: {
        getOwner: getOwnerMutation,
        getWebsite: getWebsiteMutation,
        getOwnerDetails: getOwnerDetailMutation,
    }
})