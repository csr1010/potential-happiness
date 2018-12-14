import { Router } from "express";
import dummyData from "../dummyData/jiras.json";

const router = Router();

export default () => {
  function filterResults(queryKeys, list, queryString) {
    queryKeys.forEach(key => {
      list = list.filter(ticket => {
        return queryString[key] === ticket[key]
      })
    });
    return list;
  }

  router.get("/", (req, res, next) => {
    const queryString = req.query;
    let results = filterResults(Object.keys(queryString), dummyData, queryString);
    res.json(results);
  });

  return router;
};
