import context from './../../data/context'

export const getOwnerDetailResolver = () => {
    console.log(context.ownerDetails)
    return context.ownerDetails;
}

export default getOwnerDetailResolver