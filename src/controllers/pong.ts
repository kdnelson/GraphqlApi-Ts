import logging from '../config/logging';

const NAMESPACE = 'Pong Controller';

const pongRequest = (req: any, res: any, next: any) => {
    logging.info(NAMESPACE, `Ping/Pong API Test.`);

    return res.status(200).json({
        message: 'pong'
    });
};

export default { pongRequest };