import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';
const hostname = '127.0.0.1';
const port = 3200;
const app = express();
const server = http.createServer(app);
// CREATE SCHEMA public;
app.use(logger('dev')); // log requests to the console
// Parser incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);
require('./server/config/config.js');
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the default API route',
}));
server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});