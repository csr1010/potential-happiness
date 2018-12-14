'use strict';
const functions = require('firebase-functions');

exports.fetchDialogFlowData = functions.https.onRequest((request, response) => {
  const results = {}
  const parameters = request.body.queryResult.parameters;
  results.ticket_number = parameters['any'] || '';
  results.jira_type = parameters['jira_type'] || '';
  results.name = parameters['given-name'] || '';  
  process.env.DEBUG = 'dialogflow:debug';
  response.send(JSON.stringify({"fulfillmentText": JSON.stringify(results)}));
});