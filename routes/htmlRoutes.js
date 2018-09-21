module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      title: "Ace Squadron",
      css: ["landing-page.min.css", "_masthead.css"]
    });
  });

  //This will load fight and the fight.css
  app.get("/fight", function(req, res) {
    res.render("fight", { title: "Ace Squadron", css: ["fight.css"] });
  });

  //Squad creation route
  app.get("/create", function(req, res) {
    res.render("create", { title: "Ace Squadron", css: ["creation.css"] });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
