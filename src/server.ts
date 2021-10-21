import http from 'http';
import express from 'express';
import * as graphqlExpress from 'express-graphql'
import logging from './config/logging';
import config from './config/config';
import pongRoute, { use } from './routes/pong'

const NAMESPACE = 'Server';
const router = express();
const schema = require('./graphql');

/**  Logging the request */
router.use((req: any, res: any, next: any) => {
    logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
    res.on('Finish', () => {
        logging.info(
            NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`);
    });

    next();
});

/**  Parse the request */
router.use(express.urlencoded({ extended: false}));
router.use(express.json());

/**  API rules */
router.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');  // for production, remove this and add allowed Urls
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');

    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
});

/** Routes */
router.use('/test', pongRoute);

/** Error handling */
router.use((req: any, res: any, next: any) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Graphql */
router.use('./graphql', graphqlExpress.graphqlHTTP({
    schema,
    graphiql: true
}))

/** Create the server */
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () => logging.info(
    NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));
