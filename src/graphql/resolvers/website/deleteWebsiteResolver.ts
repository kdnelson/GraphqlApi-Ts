import context from "../../data/context";

export const deleteWebsiteResolver = (_parent: any, args: {[argName: string]: any}) => {
    context.websites.forEach( (item: any, index: any) => {
        if(item.id === args.id) {
            context.websites.splice(index, 1);
        }        
    });
}

export default deleteWebsiteResolver