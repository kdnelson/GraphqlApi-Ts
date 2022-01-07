import context from './../../data/context'

export const getOwnerResolver = (_parent: any, id: number) => {
    return context.owners.find(o => o.id === id)
}

export default getOwnerResolver