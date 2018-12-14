import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketComponent', (req, res, next) => {
    const ticketComponent = req.params.ticketComponent;
    var result = dummyData.filter(ticket => ticket.components.toLowerCase() == ticketComponent.toLowerCase());
    res.json(result);
  });

  return router;
}
