require("./tasks");

const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const { router } = require("./router");
app = express();
console.log(path.resolve(__dirname, ".."));
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
