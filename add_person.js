var tableInsert = process.argv;
const pg = require("pg");
const settings = require("./settings");

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

function addPerson(firstName, lastName, bdate) {
  return knex('famous_people')
    .insert({
      'first_name': firstName,
      'last_name': lastName,
      'birthdate': bdate
    })
    .then(() => {
      console.log('Successfully Added New Person');
    })
    .catch((err) => {
      console.error(err);
    });
}

addPerson(tableInsert[2], tableInsert[3], tableInsert[4])

// console.log(knex)


// let myQuery = function () {
//   client.query("SELECT * FROM famous_people WHERE first_name = $1::VARCHAR(50)", [tableSearch], (err, result) => {
//     if (err) {
//       return console.error("error running query", err);
//     } else {
//       console.log("Searching...");
//     }
//     let rowCount = 1;
//     console.log(`Found ${result.rows.length} person(s) by the name '${tableSearch}'`);
//     result.rows.forEach(function (person) {
//       console.log(`- ${rowCount++}: ${person.first_name} ${person.last_name}, born '${person.birthdate.getFullYear()}-0${person.birthdate.getMonth() + 1}-${person.birthdate.getDate()}'`)
//     })
//     client.end();
//   });
// }

// client.connect((err) => {
//   if(err) {
//     return console.error("Connection Error", err);
//   }
//   myQuery();
// });