const PassportJWT = require('passport-jwt');
const passport = require('passport');
const devConfig = require('../config/development');
const User = require('../models/User');

module.exports = configureJWTStrategy = () => {
  const opts = {};
  opts.jwtFromRequest = PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = devConfig.secret;
  passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      User.findOne({ _id: payload.id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
        // or you could create a new account
      });
    })
  );
};
