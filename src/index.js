require("./tasks");
const bodyParser = require('body-parser');
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");
const localStrategy = require("passport-local").Strategy
const nunjucks = require("nunjucks");
const path = require("path");
const { router } = require("./router");
const { poll } = require("./database/connection");
app = express();
app.use(bodyParser.urlencoded({ extended: true }))

app.use(session({
  secret: "sicoob123@",
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// LOGIN
passport.use(new localStrategy({ usernameField: 'email', passwordField: 'password' }, async function (email, password, done) {

  const [err, results] = await poll.query("SELECT * FROM users WHERE email=? AND password=?  LIMIT 1", [email, password])

  if (err) return done(err);

  if (!results || results.length === 0) {
    return done(null, false, { message: 'Usuário não encontrado' });
  }

  const user = results[0];
  return done(null, user);



}))
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const [err, results] = await poll.query("SELECT * FROM users WHERE id=? LIMIT 1", [id])
  if (err) return done(err);
  const user = results[0];
  done(null, user);
})

app.post('/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })

);


// FIM LOGIN

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
