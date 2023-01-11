const Course = require("../../model/Coures");
const { multipleMongoToArray } = require("../../ultil/mongoose");

class Sitecontroller {
  // "GET" news
  index(req, res, next) {
    Course.find({})
      .then((coures) =>
        res.render("home", { coures: multipleMongoToArray(coures) })
      )
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new Sitecontroller();
