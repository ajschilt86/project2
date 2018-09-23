var db = require("../models");

module.exports = function(app) {
  // This should allow us to look at the full squadron w/ the planes through a left outer join
  // Left outer join comes from the include
  app.get("/api/planes", function(req, res) {
    db.Planes.findAll({
      include: [db.Squadron]
    }).then(function(dbPlanes) {
      res.json(dbPlanes);
    });
  });

  // This will allow us to look up one specific squadron along w/ planes
  app.get("api/planes/:name", function(req, res) {
    db.Planes.findOne({
      where: {
        name: req.params.name
      },
      include: [db.Squadron]
    }).then(function(dbPlanes) {
      res.json(dbPlanes);
    });
  });

  // Create a new planes array
  app.post("/api/planes", function(req, res) {
    db.Planes.create(req.body).then(function(dbPlanes) {
      res.json(dbPlanes);
    });
  });
};
