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
import lastCommentLookup from './lastCommentLookup';
const router = Router();

  /* GET home page. */
  router.get('/test', (req, res, next) => {
    res.json({
      "test" : "Hello World"
    });
  });

  router.use('/search', idLookup());
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
  router.use('/lastComment', lastCommentLookup());

  export default () => router;
