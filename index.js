import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const server = http.Server(app);
const app = express();
const host = '127.0.0.1';
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', indexRouter);
app.use('/users', usersRouter);

server.listen(port, host, () => console.log(`Server running at http://${host}:${port}/`))