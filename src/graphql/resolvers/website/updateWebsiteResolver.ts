import context from "../../data/context";

export const updateWebsiteResolver = (_parent: any, args: {[argName: string]: any}) => {
    context.websites.forEach( (item: any, index: any) => {
        if(item.id === args.id) {
            context.websites[index].name = args.name
            context.websites[index].ownerId = args.ownerId
        }        
    });
}

export default updateWebsiteResolver