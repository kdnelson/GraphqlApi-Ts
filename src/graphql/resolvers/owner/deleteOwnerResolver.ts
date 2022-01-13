import context from "../../data/context";

export const deleteOwnerResolver = (_parent: any, args: {[argName: string]: any}) => {
    context.owners.forEach( (item: any, index: any) => {
        if(item.id === args.id) {
            context.owners.splice(index, 1);
        }        
    });
}

export default deleteOwnerResolver