// Node Modules
import passport from 'koa-passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
// Config
import config from '../config';

const { baseURL, callbackURL, oAuth } = config;

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy(
  {
    clientID: oAuth.google.clientID,
    clientSecret: oAuth.google.clientSecret,
    callbackURL
  },
  (accessToken, refreshToken, profile, done) => {
    console.info(profile);
    const user = {
      // ID: profile.id,
      // name: profile.displayName,
      // avatar: profile.avatarUrl
    };
    done(null, user);
  }
));

export default passport;