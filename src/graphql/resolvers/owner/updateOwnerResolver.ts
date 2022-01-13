import context from "../../data/context";

export const updateOwnerResolver = (_parent: any, args: {[argName: string]: any}) => {
    context.owners.forEach( (item: any, index: any) => {
        if(item.id === args.id) {
            context.owners[index].name = args.name
        }        
    });
}

export default updateOwnerResolver