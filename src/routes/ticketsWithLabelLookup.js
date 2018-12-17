import {Router} from "express"
import dummyData from "../../dummyData/index.json"

const router = Router();

function caseInsensitiveIncludes(arr, word){
	for (var i = 0, L = arr.length; i < L; i++) {
	  if (arr[i].toLowerCase() === word.toLowerCase()) return true;
    console.log(arr[i], word)
	}
	return false;
}

export default () => {

  router.get('/:ticketsWithLabel', (req, res, next) => {
    const labelName = req.params.ticketsWithLabel;
    var result = dummyData.filter(ticket => caseInsensitiveIncludes(ticket.labels, labelName));
    res.json(result);
  });

  return router;
}