import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 4321;
const logger = morgan("dev");


app.use(logger);
app.use("/", globalRouter);


const handelListen = () => console.log(`Server Listening. http://localhost:${PORT}`);

app.listen(PORT, handelListen);