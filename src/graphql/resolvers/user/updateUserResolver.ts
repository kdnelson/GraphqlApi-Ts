import context from "../../data/context";

export const updateUserResolver = (parent: any, args: {[argName: string]: any}) => {
    // context.forEach( (item: any, index: any) => {
    //     if(item.id === args.id) {
    //         context[index].first_name = args.first_name
    //         context[index].last_name = args.last_name
    //         context[index].email = args.email
    //         context[index].gender = args.gender
    //         context[index].ip_address = args.ip_address
    //     }        
    // });
}

export default updateUserResolver