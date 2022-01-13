import context from "../../data/context";

export const createOwnerResolver = (_parent: any, args: {[argName: string]: any}) => { 
    context.owners.push({
        id: context.owners.length + 1,
        name: args.name
    });
    return args
}

export default createOwnerResolver