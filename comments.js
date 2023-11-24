
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//serve static files
app.use(express.static(path.join(__dirname, '../client/dist')));

//import the routes
const routes = require('./routes.js');

//use the routes
app.use('/', routes);

//start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});