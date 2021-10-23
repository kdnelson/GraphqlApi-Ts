import express from 'express';
import pongController from '../controllers/pongController';

const router = express.Router();
router.get('/ping', pongController.pongRequest);

export = router;