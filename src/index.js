import express from 'express';
import bodyParser from 'body-parser';
import http from 'http';
import indexRouter from './routes';


const app = express();
const server = http.Server(app);
const port = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', indexRouter());

server.listen(port, () => console.log(`Server running on ${port}`))