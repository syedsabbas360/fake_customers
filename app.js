const express = require("express");
const app = express();
const mustache = require("mustache-express");
var faker = require('faker');
var models = require("./models")
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

app.listen(3000, function() {
  console.log("We are listening (3000)")
})

app.get('/', function(req, res) {
  models.Customer.findAll()
  .then(function(name){
      res.render('index', {
        users: name
      })
    })
})

app.get('/:id', function(req, res) {
models.Customer.findOne({
  where: {
    id: req.params.id
  }
})
.then(function(name){
  console.log(name)
  res.render('show', {
    users: name
    // users: email,
    // users: company
  })
})
})
