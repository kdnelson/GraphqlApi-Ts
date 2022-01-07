import context from './../../data/context'

export const getWebsiteResolver = (_parent: any, id: number) => {
    return context.websites.find(o => o.id === id)
}

export default getWebsiteResolver