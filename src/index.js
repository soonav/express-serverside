const express = require("express");
const path = require("path");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const { urlencoded, json } = require("express");
const app = express();
const port = 8000;
const router = require("./routers");
const methodOverride = require("method-override");
const db = require("./config/db");

app.use(morgan("combie"));
app.use(urlencoded({ extended: "true" }));
app.use(json());
app.use(express.static(path.join(__dirname, "/public")));
// template engine
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.use(methodOverride("_method"));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resoures/views"));
db.connect();
router(app);

app.listen(port, () => {
  console.log(`connected port${port}`);
});
