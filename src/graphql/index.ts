import {
    GraphQLSchema, 
} from 'graphql'
import rootQueryType from './types/rootQueryType';
import mutations from './mutations';

export default new GraphQLSchema({ query: rootQueryType, mutation: mutations })
