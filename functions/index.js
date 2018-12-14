'use strict';
const functions = require('firebase-functions');
const axios= require('axios');
const url = 'http://127.0.0.1:8082/api/'

exports.fetchDialogFlowData = functions.https.onRequest((request, response) => {
  const results = {}
  const parameters = request.body.queryResult.parameters;
  results.ticket_number = parameters['any'] || '';
  results.jira_type = parameters['jira_type'] || '';
  results.name = parameters['given-name'] || '';  
  process.env.DEBUG = 'dialogflow:debug';

  axios.get(`${url}${results.jira_type}/${results.ticket_number}`)
       .then((res) => console.log(res.data))
       .catch((err) => console.log(err))
  response.send(JSON.stringify({"fulfillmentText": JSON.stringify(results)}));
});