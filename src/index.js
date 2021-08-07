import express from 'express';
import morgan from 'morgan';

import globalRouter from './routers/globalRouter';



const app = express();
const PORT = 4321;
const logger = morgan("dev");


app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);


const handelListen = () => console.log(`Server Listening. http://localhost:${PORT}`);

app.listen(PORT, handelListen);