import express from 'express';

const globalRouter = express.Router();

globalRouter.route("/").get();

