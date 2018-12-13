import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {
  function getStatus() {

  }
  router.get('/:ticketId', (req, res, next) => {
    const ticketId = req.params.ticketId;
    var result = dummyData.filter(ticket => ticket.Id == ticketId);
    res.json(result);
  });
  return router;
}



