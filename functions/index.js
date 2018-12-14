'use strict';
const functions = require('firebase-functions');
const axios = require('axios');

exports.fetchDialogFlowData = functions.https.onRequest((request, response) => {
  const results = {}
  const parameters = request.body.queryResult.parameters;
  results.any = parameters['any'] || '';
  let endPoint = null;
  let callback = null;

  // give me status of ticket js-706
  // give me assignee of ticket js-706
  if ('ticketProp' in parameters) {
    let ticketProp = (parameters['ticketProp'] || 'status');
    endPoint = `http://127.0.0.1:8082/api/search/${results.any}`;
    callback = (res) => {
      if (res.data.length === 0) {
        response.send(JSON.stringify({ "fulfillmentText": "Sorry! No tickets found" }));
      } else {
        let result;
        if (ticketProp === "lastComment") {
          result = "Last comment was made by : "+res.data[0][ticketProp].commenter
          +" and the comment was ```"+res.data[0][ticketProp].comment+"``` ";
        } else {
          result = `Hey! the ${ticketProp} of your ticket is ${res.data[0][ticketProp]}`
        }
        response.send(JSON.stringify({ "fulfillmentText": result }));
      }
    }
  }

  // give me tickets with status closed
  // give me tickets with assignee Chetan
  // give me tickets with priority High
  if ('ticketsWith' in parameters) {
    let ticketsWith = (parameters['ticketsWith'] || 'status');
    endPoint = `http://127.0.0.1:8082/api/${ticketsWith}/${results.any}`;
    callback = (res) => {
      if (res.data.length === 0) {
        response.send(JSON.stringify({ "fulfillmentText": "Sorry! No tickets found" }));
      } else {
        let o = res.data.reduce((a, b) => {
          let desc = `${b.Id} - ${b.title} - ${b.status}`;
          return `${a} ${!a ? '' : '\n'} ${desc}`;
        }, '');
        response.send(JSON.stringify({ "fulfillmentText": o}));
      }
    }
  }

  process.env.DEBUG = 'dialogflow:debug';

  axios.get(endPoint)
    .then(callback)
    .catch((err) => response.send(JSON.stringify({ "fulfillmentText": "Sorry! Something went wrong" })))

});