import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketFixVersion', (req, res, next) => {
    const ticketFixVersion = req.params.ticketFixVersion;
    var result = dummyData.filter(ticket => ticket.fixVersion == ticketFixVersion);
    res.json(result);
  });

  return router;
}
