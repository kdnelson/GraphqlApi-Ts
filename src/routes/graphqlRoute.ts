import * as graphqlExpress from 'express-graphql'
import schema from './../graphql';

export default graphqlExpress.graphqlHTTP({
    schema: schema,
    graphiql: true
})