import express, { Express, Request, Response } from 'express';
import path from 'path';
import cors from 'cors';

import { eventList } from './event-list';

const app: Express = express();

const PORT = 3001;
const BASE = '/api';

app.use(cors({
    origin: ['https://ryanblakeman.com', 'https://rblakeman.github.io/', 'http://localhost:3000']
}));

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get(`${BASE}`, (req: Request, res: Response) => {
    res.send({ express: 'Hello World!' });
});

app.get(`${BASE}/events`, (req: Request, res: Response) => {
    res.send({ events: eventList });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
