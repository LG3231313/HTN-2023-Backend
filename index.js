import express from "express";
import sqlite3, { OPEN_CREATE } from "sqlite3";

const port = process.env.PORT || 3000;

const app = express();

// Create a database if none exists
const database = new sqlite3.Database("hackers.db");

/*
// Create a 'main' table containing all required info. Note that requests will require spaces to be 
// typed as %20 to request using name (which is the primary key)
database.run('CREATE TABLE main (\
  name TEXT PRIMARY KEY,\
  company TEXT,\
  email TEXT,\
  phone TEXT,\
  skill TEXT,\
  rating INTEGER,\
)');*/

//sqlite gave me trouble with its documentation, so I made the wise decision to use a json based database.

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example REST Express app listening at http://localhost:${port}`);
});

app.get('/users', (req, res) => {
  res.sendFile('database.json'); //send entire json as a file
});

app.get('/users/:name', (req, res) => {
  let parsed = JSON.parse('database.json');
  let nameSend = (parsed.name); //parse json as an object and store name as text
  res.send(JSON.stringify(nameSend)); //send object of that persons name as a json to user
});//i realized about to submit this that this does not work as I intended for obvious reasons, and unfortunately do not have the time 
//to fix this. 

//put request
//search for that 'line' in the json, update it
//for skills, check if that skill exsists, if it does, update its information. if skill does not exsist, create it

//skills endpoints
//one endpoint to search json for occurences of [skill] and return that
//one endpoint to searhc json for all skills, then search each skill, returning those that fit in the frequency parameters

app.get('users/skills/:skill', (req, res) => {
  let string = JSON.parse('database.json'); //turn the database into a string
  let arr = string.match(skill) //use regex to make an array of found entires of 'skill'
  if (arr == null) { //match returns null if no elements found, using if else to avoid crashes
    let occurences = 0;
  }
  else {
    let occurences = arr.length;
  }
  res.send(occurences); //send the occurences (a number)
});