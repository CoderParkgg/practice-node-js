import express from 'express';
import {home} from '../controllers/videoController'

const globalRouter = express.Router();

globalRouter.route("/").get(home);

export default globalRouter;