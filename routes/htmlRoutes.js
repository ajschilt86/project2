var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  //This will load fight and the fight.css
  app.get("/fight", function(req, res){
    res.render("fight", {title: "Ace Squadron", css:['fight.css']});
  });

  //Squad creation route
  app.get("/creation", function(req, res){
    res.render("creation", {title: "Ace Squadron", css:["creation.css"]});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
