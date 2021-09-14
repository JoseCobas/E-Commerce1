const path = require('path');
const express = require('express');
const sqlDriver = require('better-sqlite3');

// create a new web server
const app = express();

// ask the web server to serve files from the frontend files
app.use(express.static(path.join(__dirname, '../frontend')));

// create a connection to the database
const db = new sqlDriver('../db/products.db');

// make some REST routes
app.get('/api/mobiles', (req, res) => {
  // create a db query as a prepared statement
  let stmt = db.prepare(`
    SELECT *
    FROM mobiles
  `);
  // run the query and return all the data
  let result = stmt.all();
  // send the result to the client as json
  res.json(result);
});
app.get('/api/laptops', (req, res) => {
    // create a db query as a prepared statement
    let stmt = db.prepare(`
    SELECT *
    FROM laptops
    `);
    // run the query and return all the data
    let result = stmt.all();
    // send the result to the client as json
    res.json(result);
  });
  app.get('/api/headphones', (req, res) => {
    // create a db query as a prepared statement
    let stmt = db.prepare(`
    SELECT *
    FROM headphones
    `);
    // run the query and return all the data
    let result = stmt.all();
    console.log(result)
    
  // send the result to the client as json
  res.json(result);
});

// start the web server
app.listen(4000, () => console.log('Listening on port 4000'));
