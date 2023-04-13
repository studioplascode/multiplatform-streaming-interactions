import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
//import twitchChat from './util/chat/twitchChat';
import Socket from './util/socket';
import logger from 'logger';
import { loggerTitle } from 'shared-types';
Socket;

dotenv.config();

const app: Express = express();
const port = process.env.EXPRESS_PORT|| 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get("/get-config", ()=>{})

app.get("/set-config", ()=>{})

app.listen(port, () => {
  logger.info(loggerTitle.EXPRESS_SERVER, `⚡️[server]: Server is running at http://localhost:${port}`);
});