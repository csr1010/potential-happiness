import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

export default () => {

  router.get('/:ticketFixVersion', (req, res, next) => {
    const ticketFixVersion = req.params.ticketFixVersion;
    var result = dummyData.filter(ticket => ticket.fixVersion.toLowerCase() == ticketFixVersion.toLowerCase());
    res.json(result);
  });

  return router;
}
