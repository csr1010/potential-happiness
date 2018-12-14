import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketReporter', (req, res, next) => {
    const ticketReporter = req.params.ticketReporter;
    var result = dummyData.filter(ticket => ticket.reporter.toLowerCase() == ticketReporter.toLowerCase());
    res.json(result);
  });

  return router;
}