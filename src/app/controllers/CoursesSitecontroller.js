const Course = require("../../model/Coures");
const { mongooseToObject } = require("../../ultil/mongoose");

class CoursesSitecontroller {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        return res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch((error) => console.log(error));
  }

  create(req, res, next) {
    res.render("courses/create");
  }

  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((courese) =>
        res.render("courses/edit", { courese: mongooseToObject(courese) })
      )
      .catch(next);
  }

  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(res.redirect("/me/stored/courese"))
      .catch(next);
  }
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id }).then(res.redirect("back"));
  }
  store(req, res, next) {
    const formData = req.body;
    formData.thumnails = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const courese = new Course(formData);
    courese
      .save()
      .then(res.redirect("/"))
      .catch((eror) => res.send("thêm mới thất bại"));
  }
}

module.exports = new CoursesSitecontroller();
