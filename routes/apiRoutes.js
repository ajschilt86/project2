var db = require("../models");

module.exports = function(app) {
  // This should allow us to look at the full squadron w/ the planes through a left outer join
  // Left outer join comes from the include
  app.get("/api/squadron", function(req, res) {
    db.Squadron.findAll({
      include: [db.Planes]
    }).then(function(dbSquadron) {
      res.json(dbSquadron);
    });
  });

  // This will allow us to look up one specific squadron along w/ planes
  app.get("api/squadron/:name", function(req, res) {
    db.Squadron.findOne({
      where: {
        name: req.params.name
      },
      include: [db.Planes]
    }).then(function(dbSquadron) {
      res.json(dbSquadron);
    });
  });

  // Create a new squadron
  app.post("/api/squadron", function(req, res) {
    db.Squadron.create(req.body).then(function(dbSquadron) {
      res.json(dbSquadron);
    });
  });
};
