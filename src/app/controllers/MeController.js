const Course = require("../../model/Coures");
const { multipleMongoToArray } = require("../../ultil/mongoose");

class MeController {
  storeCourese(req, res, next) {
    Course.find({})
      .then((courese) => {
        return res.render("me/courese-stored", {
          courese: multipleMongoToArray(courese),
        });
      })
      .catch((e) => console.log("e", e));
  }
}

module.exports = new MeController();
