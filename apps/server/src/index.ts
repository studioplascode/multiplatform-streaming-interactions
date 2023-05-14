import dotenv from 'dotenv';
import Socket from './util/socket';
import logger from 'logger';
import { loggerTitle } from 'shared-types';
const app = require('./app');
Socket;

dotenv.config();

const port = process.env.EXPRESS_PORT|| 4000;

app.listen(port, () => {
  logger.info(loggerTitle.EXPRESS_SERVER, `⚡️[server]: Server is running at http://localhost:${port}`);
});