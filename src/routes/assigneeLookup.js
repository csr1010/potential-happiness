import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

export default () => {

  router.get('/:ticketAssignee', (req, res, next) => {
    const ticketAssignee = req.params.ticketAssignee;
    var result = dummyData.filter(ticket => ticket.assignee.toLowerCase() == ticketAssignee.toLowerCase());
    res.json(result);
  });

  return router;
}