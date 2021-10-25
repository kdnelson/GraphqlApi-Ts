import context from "../../data/context";

export const createUserResolver = (parent: any, args: {[argName: string]: any}) => { 
    context.push({
        id: context.length + 1,
        first_name: args.first_name,
        last_name: args.last_name,
        email: args.email,
        gender: args.gender,
        ip_address: args.ip_address,
    });
    return args
}

export default createUserResolver