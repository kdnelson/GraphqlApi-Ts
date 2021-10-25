import config from "./config";

const getTimeStamp = (): string => {
    return new Date().toISOString();
}

const info = (namespace: string, message: string, object?: any) => {
    if(object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`);
    }
}

const warn = (namespace: string, message: string, object?: any) => {
    if(object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`);
    }
}

const error = (namespace: string, message: string, object?: any) => {
    if(object) {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object);
    } else {
        console.error(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`);
    }
}

const debug = (namespace: string, message: string, object?: any) => {
    if(object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
}

export const logRequest = (req: any, res: any, next: any) => {
    info(config.server.namespace, `METHOD - [${req.method}], URL - [${req.url}]`);
    res.on('Finish', () => {
        info(config.server.namespace, `METHOD - [${req.method}], URL - [${req.url}], STATUS - [${res.statusCode}]`);
    });

    next();
}

export default {
    info,
    warn,
    error,
    debug
}