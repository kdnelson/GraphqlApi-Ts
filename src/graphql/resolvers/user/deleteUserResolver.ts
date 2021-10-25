import context from "../../data/context";

export const deleteUserResolver = (parent: any, args: {[argName: string]: any}) => {
    console.log('deleteUserResolver ')
    context.forEach( (item: any, index: any) => {
        if(item.id === args.id) {
            context.splice(index, 1);
        }        
    });
}

export default deleteUserResolver