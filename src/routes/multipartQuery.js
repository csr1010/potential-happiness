import { Router } from "express";
import dummyData from "../../dummyData/index.json";

const router = Router();

export default () => {
  function caseInsensitiveIncludes(arr, word){
  for (var i = 0, L = arr.length; i < L; i++) {
    if (arr[i].toLowerCase() === word.toLowerCase()) return true;
  }
  return false;
}

  function filterResults(queryKeys, list, queryString) {
    queryKeys.forEach(key => {
      list = list.filter(ticket => {
        if (Array.isArray(ticket[key])){
          return caseInsensitiveIncludes(ticket[key], queryString[key]);
        }
        return ticket[key].toLowerCase().indexOf(queryString[key].toLowerCase()) > -1;
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
