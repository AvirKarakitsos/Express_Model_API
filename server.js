import express from 'express';
import { logger } from './middleware/logEvents.js';
import { errorHandler } from './middleware/errorHandler.js';

const PORT = 4000;

const server = express();

server.use(logger);
server.get('/', (req, res) => {
    res.status(200).json('test 2');
});

server.use(errorHandler);

server.listen(PORT, () => {
    console.log('Server listening in port: ' + PORT);
});
