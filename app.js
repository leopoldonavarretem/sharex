// Imports
const express = require("express");

// Allows us to use environmental variables
require("dotenv/config");

// Allows us to access the database
require("./config/mongoDB.config");

// Run Express
const app = express();

// Imports our server configurations
require("./config/server.config")(app);

// This will handle all of our routes
const allRoutes = require('./routes/index.routes')
app.use('/', allRoutes)

//This will handle all of our routes
require("./error-handling")(app);

module.exports = app;