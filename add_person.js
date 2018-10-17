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
  //We fire Select Query with knex
  knex.select("*").from("famous_people")  
 .then(function (peoples){  
   peoples.forEach((people)=>{ //use of Arrow Function  
     console.log({...people});  
   });  
 }).catch(function(err) {  
 // All the error can be checked in this piece of code  
   console.log(err);  
 }).finally(function() {  
   // To close the connection pool  
   knex.destroy();  
 });  
