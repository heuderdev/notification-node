require("./tasks");

const express = require("express");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

const nunjucks = require("nunjucks");
const path = require("path");
const { router } = require("./router");
app = express();

app.use(session({
  secret: "sicoob123@",
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg")
  res.locals.error_msg = req.flash("error_msg")
  next()
})

app.set("view engine", "html");
nunjucks.configure(path.resolve(__dirname, "..", "view"), {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true,
  dev: true,
  throwOnUndefined: true,
});
app.use(express.json());

app.use(router);
app.listen(1313);
