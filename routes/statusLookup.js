import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketStatus', (req, res, next) => {
    const ticketStatus = req.params.ticketStatus;
    var result = dummyData.filter(ticket => ticket.status.toLowerCase() == ticketStatus.toLowerCase());
    res.json(result);
  });

  return router;
}