var db = require("../models");

module.exports = function(app) {
  app.get("/api/squadron", function(req, res) {
    db.Squadron.findAll({}).then(function(dbSquadron) {
      res.json(dbSquadron);
    });
  });

  app.get("api/squadron/:name", function(req, res) {
    db.Squadron.findOne({
      where: {
        name: req.params.name
      }
    }).then(function(dbSquadron) {
      res.json(dbSquadron);
    });
  });

  // Create a new example
  app.post("/api/squadron", function(req, res) {
    db.Squadron.create(req.body).then(function(dbSquadron) {
      res.json(dbSquadron);
    });
  });
};
