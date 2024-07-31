#!/usr/bin/node
const request = require('request');
const id = process.argv[2];

request(`https://swapi-api.alx-tools.com/api/films/${id}`, { json: true }, (error, response, body) => {
  if (error) console.log(error);
  for (const character of body.characters) {
    request(character, { json: true }, (error, response, body) => {
      if (error) console.log(error);
      console.log(body.name);
    });
  }
});
