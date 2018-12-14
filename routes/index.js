import {Router} from 'express';
import idLookup from './idLookup';
import statusLookup from './statusLookup';
import assigneeLookup from './assigneeLookup';
import componentLookup from './componentLookup';
import reporterLookup from './reporterLookup';
import priorityLookup from './priorityLookup';
import epicLookup from './epicLookup';
import getEpicOf from './getEpicOf';
import fixVersionLookup from './fixVersionLookup';
import inLeadLookup from './inLeadLookup';
import sprintLookup from './sprintLookup';
import developerLookup from './developerLookup';
import ticketsWithLabelLookup from './ticketsWithLabelLookup';
import getLabelsOf from './getLabelsOf';
import getLastCommentOf from './getLastCommentOf';
import getAssigneeOf from './getAssigneeOf';
import getComponentOf from './getComponentOf';
import getStatusOf from './getStatusOf';
import labelsLookup from './labelsLookup';

const router = Router();

  /* GET home page. */
  router.get('/test', (req, res, next) => {
    res.json({
      "test" : "Hello World"
    });
  });

  //Get all tickets matching input
  router.use('/search', idLookup());
  router.use('/status', statusLookup());
  router.use('/assignee', assigneeLookup());
  router.use('/component', componentLookup());
  router.use('/reporter', reporterLookup());
  router.use('/priority', priorityLookup());
  router.use('/epic', epicLookup());
  router.use('/getEpicOf', getEpicOf());
  router.use('/fixVersion', fixVersionLookup());
  router.use('/inLead', inLeadLookup());
  router.use('/sprint', sprintLookup());
  router.use('/developer', developerLookup());
  router.use('/ticketsWithLabel', ticketsWithLabelLookup());
  router.use('/getLabelsOf', getLabelsOf());

  //Get field from specific ticket
  router.use('/getLastCommentOf', getLastCommentOf());
  router.use('/getAssigneeOf', getAssigneeOf());
  router.use('/getComponentOf', getComponentOf());
  router.use('/getStatusOf', getStatusOf());
  router.use('/labels', labelsLookup());

  export default () => router;
