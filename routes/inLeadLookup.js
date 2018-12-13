import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketInLead', (req, res, next) => {
    const ticketInLead = req.params.ticketInLead;
    var result = dummyData.filter(ticket => ticket.InLead == ticketInLead);
    res.json(result);
  });

  return router;
}
