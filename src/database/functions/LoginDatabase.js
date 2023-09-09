const localStrategy = require("passport-local").Strategy
const { poll } = require("../connection")



module.exports = function (passport) {
    passport.use(new localStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => { }))

    try {
        poll.query("SELECT * FROM users WHERE username=?, password=?  LIMIT 1", [username, password], (err, result) => {
            if (err) return done(err);
            if (!results || results.length === 0) {
                return done(null, false, { message: 'Usuário não encontrado' });
            }
            console.log(results);
            const user = results[0];
            return done(null, user);

        })
    } catch (error) {
        return error;
    }

    passport.serealizeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        poll.query("SELECT * FROM users WHERE id=? LIMIT 1", [id], (err, result) => {
            if (err) return done(err);

            const user = results[0];
            done(null, user);
        })
    })
}
