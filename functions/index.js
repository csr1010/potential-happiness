'use strict';
const functions = require('firebase-functions');
const axios = require('axios');

exports.fetchDialogFlowData = functions.https.onRequest((request, response) => {
  const results = {}
  const parameters = request.body.queryResult.parameters;
  const action = request.body.queryResult.action;
  results.any = parameters['any'] || '';
  let endPoint = null;
  let callback = null;
  let domain = `100.26.106.242:3333`;

  if (action === 'input.multiquery') {
    let ticketProps = parameters['ticketProp'];
    let qp = ticketProps.reduce((a, b, i) => {
        let keyVal = `${b}=${results.any[i]}`;
        return `${a}${!a ? '' : '&'}${keyVal}`;
    },'');
    endPoint = `http://${domain}/api/multipartQuery?${qp}`;
    callback = (res) => {
      if (res.data.length === 0) {
        response.setHeader('Content-Type', 'applicaiton/json');
        response.send(JSON.stringify({ "fulfillmentText": "Sorry! No tickets found" }));
      } else {
        let o = res.data.reduce((a, b) => {
          let desc = `${b.Id} - ${b.title}`;
          ticketProps.forEach(element => {
            desc += `- ${b[element]}`;
          });
          return `${a} ${!a ? '' : '\n'} ${desc}`;
        }, '');
        response.setHeader('Content-Type', 'applicaiton/json');
        response.send(JSON.stringify({ "fulfillmentText": o }));
      }
    }
  }

  // give me status of ticket JS-1001 // integrate with voice commands 
  // give me assignee of ticket JS-1001
  // status of JS-1001 // easy to type
  // assigned JS-1001
  // priority JS-1001
  // comment on JS-1001
  // title of JS-1001
  else if (action === 'input.jiraAction' && 'ticketProp' in parameters) {
    let ticketProp = (parameters['ticketProp'] || 'status');
    endPoint = `http://${domain}/api/search/${results.any}`;
    callback = (res) => {
      if (res.data.length === 0) {
        response.send(JSON.stringify({ "fulfillmentText": "Sorry! No tickets found" }));
      } else {
        let result;
        if (ticketProp.toLowerCase().indexOf("comment") > -1) {
          result = "Last comment was made by : " + res.data[0][ticketProp].commenter
            + " and the comment was ```" + res.data[0][ticketProp].comment + "``` ";
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
  // list all high priority tickets
  // list all closed status tickets
  else if ('ticketsWith' in parameters) {
    let ticketsWith = (parameters['ticketsWith'] || 'status');
    endPoint = `http://${domain}/api/${ticketsWith}/${results.any}`;
    callback = (res) => {
      if (res.data.length === 0) {
        response.setHeader('Content-Type', 'applicaiton/json');
        response.send(JSON.stringify({ "fulfillmentText": "Sorry! No tickets found" }));
      } else {
        let o = res.data.reduce((a, b) => {
          let desc = `${b.Id} - ${b.title} - ${b.status}`;
          return `${a} ${!a ? '' : '\n'} ${desc}`;
        }, '');
        response.setHeader('Content-Type', 'applicaiton/json');
        response.send(JSON.stringify({ "fulfillmentText": o }));
      }
    }
  }

  let noAxios = false;

  

  process.env.DEBUG = 'dialogflow:debug';

  if(!noAxios)
  axios.get(endPoint)
    .then(callback)
    .catch((err) => response.send(JSON.stringify({ "fulfillmentText": "Sorry! Something went wrong" })))
});
