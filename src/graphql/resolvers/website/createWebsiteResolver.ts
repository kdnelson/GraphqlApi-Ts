import context from "../../data/context";

export const createWebsiteResolver = (_parent: any, args: {[argName: string]: any}) => { 
    context.websites.push({
        id: context.websites.length + 1,
        name: args.name,
        ownerId: -1
    });
    return args
}

export default createWebsiteResolver