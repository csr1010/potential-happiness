import {Router} from 'express';
import idLookup from './idLookup';
import statusLookup from './statusLookup';
const router = Router();

  /* GET home page. */
  router.get('/test', (req, res, next) => {
    res.json({
      "test" : "Hello World"
    });
  });

  router.use('/search', idLookup());
  router.use('/status', statusLookup());

  export default () => router;
