const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client(settings);
const inputName = process.argv[2];

client.connect((err) => {
    if (err) {
        return console.error("Connection Error", err);
    }

    client.query('SELECT * FROM famous_people WHERE first_name LIKE $1::text', [inputName], (err, result) => {
        if (err) {
            return console.error("error running query", err);
        }
        console.log('Searching...');

        setTimeout( () => {
            console.log('Found', result.rows.length, 'person(s) by the name', "" +"'" +inputName +"'"+ ":");
            result.rows.forEach((row) => {
                console.log("-" + row.id + ":" + row.first_name + " " + row.last_name + "," + "" + row.birthdate.toISOString().slice(0,10) + ""); 
            });
        }, 1000);
        client.end();
    });
});
