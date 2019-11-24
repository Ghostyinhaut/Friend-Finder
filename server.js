var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/", require("./app/routing/apiRoutes"));
app.use("/api/friends", require("./app/routing/htmlRoutes"));
app.use("*", require("./app/routing/htmlRoutes"));
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });