import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

export default () => {

  router.get('/:ticketInLead', (req, res, next) => {
    const ticketInLead = req.params.ticketInLead;
    var result = dummyData.filter(ticket => ticket.InLead.toLowerCase() == ticketInLead.toLowerCase());
    res.json(result);
  });

  return router;
}
