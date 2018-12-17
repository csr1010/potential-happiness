import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

export default () => {

  router.get('/:ticketId', (req, res, next) => {
    const ticketId = req.params.ticketId;
    var ticket = dummyData.filter(ticket => ticket.Id.toLowerCase() == ticketId.toLowerCase());
    var assignee = ticket[0].assignee;
    res.json(assignee);
  });

  return router;
}