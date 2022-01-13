import context from './../../data/context'

export const getOwnerDetailResolver = (_parent: any, id: number) => {
    return context.ownerDetails.find(o => o.id === id)
}

export default getOwnerDetailResolver