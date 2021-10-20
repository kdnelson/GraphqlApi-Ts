"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'Pong Controller';
var pongRequest = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Ping/Pong API Test.");
    return res.status(200).json({
        message: 'pong'
    });
};
exports.default = { pongRequest: pongRequest };
