import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketId', (req, res, next) => {
    const ticketId = req.params.ticketId;
    var ticket = dummyData.filter(ticket => ticket.Id == ticketId);
    var epic = ticket[0].epic;
    res.json(epic);
  });

  return router;
}
