var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("api/user/:name", function(req, res) {
    db.User.findOne({
      where: {
        name: req.params.name
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(db);
    });
  });
};
