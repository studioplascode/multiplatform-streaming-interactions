import express, { Express, Request, Response } from 'express';
import Socket from './util/socket';
Socket;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get("/get-config", ()=>{})

app.get("/set-config", ()=>{})

module.exports = app;