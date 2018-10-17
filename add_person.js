//const knex = require("knex");
const settings = require("./settings"); // settings.json
//Connecting knex with the PSQL by using various parameters
var knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : settings.host,
      user : settings.user,
      password : settings.password,
      database : settings.database
    }
  });

  let firstName = process.argv[2];
  let lastName = process.argv[3];
  let dob = process.argv[4];

  //We fire Select Query with knex
   knex('famous_people').insert({
    first_name: firstName,
    last_name: lastName,
    birthdate: dob
  }).asCallback((err, results) => {
    if (err) { 
        console.error(err); 
    }console.log(results); 
  });
 
