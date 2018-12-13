import {Router} from "express"
import dummyData from "../dummyData/jiras.json"

const router = Router();

export default () => {

  router.get('/:ticketId', (req, res, next) => {
    const ticketId = req.params.ticketId;
    var ticket = dummyData.filter(ticket => ticket.Id == ticketId);
    //console.log(ticket[0].lastComment);
    var comment = ticket[0].lastComment;
    res.json(comment);
  });

  return router;
}