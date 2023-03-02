const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const google_config = require('../../config/googleAuth');
const { searchEmailService, createUserService } = require('../services/userService');
const { newUserAuthGoogle } = require('../helpers/userHelper');

passport.use("auth-google",
  new GoogleStrategy(
    {
      clientID: google_config.google.clientID,
      clientSecret: google_config.google.clientSecret,
      callbackURL: google_config.google.callbackURL
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log('PERFIL');
        console.log(profile);
      const user = await searchEmailService(profile.emails[0].value);
      if (user) {
        done(null, user);
      } else {
        const newUser = await newUserAuthGoogle(profile);
        done(null, newUser);
      }
    }
  )
);

exports.googleLogin = passport.authenticate('auth-google', {
    scope: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.profile"],
    session: false
  });
  