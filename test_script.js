var tableSearch = process.argv[2];
const pg = require("pg");
const settings = require("./settings");

const client = new pg.Client({
  user : settings.user,
  password : settings.password,
  database : settings.database,
  host : settings.hostname,
  port : settings.port,
  ssl : settings.ssl
});

let myQuery = function () {
  client.query("SELECT * FROM famous_people WHERE first_name = $1::VARCHAR(50)", [tableSearch], (err, result) => {
    if (err) {
      return console.error("error running query", err);
    } else {
      console.log("Searching...");
    }
    let rowCount = 1;
    console.log(`Found ${result.rows.length} person(s) by the name '${tableSearch}'`);
    result.rows.forEach(function (person) {
      console.log(`- ${rowCount++}: ${person.first_name} ${person.last_name}, born '${person.birthdate}'`)
    })
    client.end();
  });
}

client.connect((err) => {
  if(err) {
    return console.error("Connection Error", err);
  }
  myQuery();
});