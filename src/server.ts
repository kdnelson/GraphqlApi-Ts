import http from 'http';
import express from 'express';
import logging, { logRequest } from './utilities/logging';
import config from './utilities/config';
import graphqlRoute from './routes/graphqlRoute';
import { rules } from './utilities/rules';
import { errors } from './utilities/errors';

const app = express();

/** Server Middleware */
app.use(logRequest);
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(rules);
app.use('/src/graphql', graphqlRoute)
app.use(errors);

/** Create the server */
const httpServer = http.createServer(app);
httpServer.listen(config.server.port, () => logging.info(
    config.server.namespace, `Server running on ${config.server.hostname}:${config.server.port}`));
