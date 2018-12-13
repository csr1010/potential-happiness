import express from 'express';
import fs from 'fs';

const router = express.Router();

export default () => {
  /* GET home page. */
  router.get('/test', (req, res, next) => {
    res.json({
      "test" : "Hello World"
    });
  });
  return router;
}