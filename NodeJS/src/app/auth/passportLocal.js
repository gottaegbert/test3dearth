const passports = require("passport");
const passportLocal = require("passport-local");
const UserModel = require("../../app/models/user");

let LocalStrategy = passportLocal.Strategy;

let initPassportLocal = () => {
  passports.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          let user = await UserModel.findOne({ email: email });

          if (!user) {
            return done(null, false);
          }

          let checkPassword = await (user.password == password);

          if (!checkPassword) {
            return done(null, false);
          }

          return done(null, user);
        } catch (error) {
          return done(null, false);
        }
      }
    )
  );
};

passports.serializeUser(function (user, done) {
  done(null, user);
});

passports.deserializeUser(function (user, done) {
  done(null,user);
});

module.exports = initPassportLocal;
