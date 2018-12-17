import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

export default () => {

  router.get('/:ticketPriority', (req, res, next) => {
    const ticketPriority = req.params.ticketPriority;
    var result = dummyData.filter(ticket => ticket.priority.toLowerCase() == ticketPriority.toLowerCase());
    res.json(result);
  });

  return router;
}
