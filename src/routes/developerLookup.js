import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

export default () => {

  router.get('/:ticketDeveloper', (req, res, next) => {
    const ticketDeveloper = req.params.ticketDeveloper;
    var result = dummyData.filter(ticket => ticket.developer.toLowerCase() == ticketDeveloper.toLowerCase());
    res.json(result);
  });

  return router;
}