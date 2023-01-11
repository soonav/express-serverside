const newRouter = require("../routers/news");
const siteRouter = require("../routers/site");
const courseRouter = require("../routers/course");
const meRouter = require("../routers/me");

function router(app) {
  app.use("/news", newRouter);
  app.use("/course", courseRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
}

module.exports = router;
