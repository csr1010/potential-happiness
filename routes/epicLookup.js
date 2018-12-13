import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketEpic', (req, res, next) => {
    const ticketEpic = req.params.ticketEpic;
    var result = dummyData.filter(ticket => ticket.epic.toLowerCase() == ticketEpic.toLowerCase());
    res.json(result);
  });

  return router;
}
