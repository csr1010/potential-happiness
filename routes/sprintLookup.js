import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:sprint', (req, res, next) => {
    const sprint = req.params.sprint;
    var result = dummyData.filter(ticket => ticket.sprint.toLowerCase() == sprint.toLowerCase());
    res.json(result);
  });

  return router;
}
