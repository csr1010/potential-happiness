import {Router} from 'express';
import idLookup from './idLookup';
import statusLookup from './statusLookup';
import assigneeLookup from './assigneeLookup';
import componentLookup from './componentLookup';
import reporterLookup from './reporterLookup';
import priorityLookup from './priorityLookup';
import epicLookup from './epicLookup';
import fixVersionLookup from './fixVersionLookup';
import inLeadLookup from './inLeadLookup';
import sprintLookup from './sprintLookup';
import developerLookup from './developerLookup';
import getLastCommentOf from './getLastCommentOf';
import getAssigneeOf from './getAssigneeOf';
import getComponentOf from './getComponentOf';
import getStatusOf from './getStatusOf';
import labelsLookup from './labelsLookup';
//import lastCommentLookup from './lastCommentLookup';
const router = Router();

  /* GET home page. */
  router.get('/test', (req, res, next) => {
    res.json({
      "test" : "Hello World"
    });
  });

  
  // Get all tickets matching input
  router.use('/status', statusLookup());
  router.use('/assignee', assigneeLookup());
  router.use('/component', componentLookup());
  router.use('/reporter', reporterLookup());
  router.use('/priority', priorityLookup());
  router.use('/epic', epicLookup());
  router.use('/fixVersion', fixVersionLookup());
  router.use('/inLead', inLeadLookup());
  router.use('/sprint', sprintLookup());
  router.use('/developer', developerLookup());

  // give one ticket
  router.use('/search', idLookup());

  // Get field from specific ticket
  // router.use('/getLastCommentOf', getLastCommentOf());
  // router.use('/getAssigneeOf', getAssigneeOf());
  // router.use('/getComponentOf', getComponentOf());
  // router.use('/getStatusOf', getStatusOf());
  // router.use('/labels', labelsLookup());
  //router.use('/lastComment', lastCommentLookup());

  export default () => router;
