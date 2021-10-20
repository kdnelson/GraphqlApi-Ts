import express from 'express';
import controller from '../controllers/pong';

const router = express.Router();
router.get('/ping', controller.pongRequest);

export = router;