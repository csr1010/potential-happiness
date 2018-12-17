import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

export default () => {

  router.get('/:ticketId', (req, res, next) => {
    const ticketId = req.params.ticketId;
    var result = dummyData.filter(ticket => ticket.Id.toLowerCase() == ticketId.toLowerCase());
    res.json(result);
  });

  return router;
}



