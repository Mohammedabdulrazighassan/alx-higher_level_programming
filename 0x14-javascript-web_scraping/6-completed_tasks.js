#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, { json: true }, (error, response, body) => {
  if (error) console.log(error);
  const results = {};
  for (const task of body) {
    if (task.completed) {
      results[task.userId] = (results[task.userId] || 0) + 1;
    }
  }
  console.log(results);
});
