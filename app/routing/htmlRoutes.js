var express = require("express");
var app = express.Router();
var friends = require("../data/friends");

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

//default all unexits url, response the link to home page instead
app.get("*", function(req,res) {
    res.redirect("/");
});


// Create New friend - takes in JSON input
app.post("/", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newfriend = req.body.friend;
  console.log("New friend Added:", newfriend);
  friends.push(newfriend);
  res.json(newfriend);
});


module.exports = app;