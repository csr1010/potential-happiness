import {Router} from 'express';
import jiraChannel from './jiraChannel';
const router = Router();

  /* GET home page. */
  router.get('/test', (req, res, next) => {
    res.json({
      "test" : "Hello World"
    });
  });

  router.use('/status', jiraChannel());

  export default () => router;
