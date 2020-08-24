const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");
require("dotenv").config();
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static("dist"));

app.get("/", (request, res) => {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});

// create route to get single book by its isbn
app.get("/books/:isbn", (request, response) => {
  // make api call using fetch
  fetch(
    `http://openlibrary.org/api/books?bibkeys=${process.env.API_KEY}:${request.params.isbn}&format=json&jscmd=data`
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      console.log(results); // logs to server
      response.send(results); // sends to frontend
    });
});

// create a search route
app.get("/search", (request, response) => {
  console.log(request.query.query);
  fetch(
    `http://openlibrary.org/search.json?q=${request.query.query || undefined}`
  )
    .then((response) => {
      return response.text();
    })
    .then((body) => {
      let results = JSON.parse(body);
      response.send(results);
    });
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});
