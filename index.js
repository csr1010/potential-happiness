import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import indexRouter from './routes';


const app = express();
const server = http.Server(app);
const host = '127.0.0.1';
const port = 8082;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', indexRouter());

server.listen(port, () => console.log(`Server running at http://${host}:${port}/`))