var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("/", {
      title: "Ace Squadron",
      css: ["landing-page.min.css"],
      css: ["_masthead.css"]
    });
  });

  //This will load fight and the fight.css
  app.get("/fight", function(req, res) {
    res.render("fight", { title: "Ace Squadron", css: ["fight.css"] });
  });

  //Squad creation route
  app.get("/creation", function(req, res) {
    res.render("creation", { title: "Ace Squadron", css: ["creation.css"] });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
