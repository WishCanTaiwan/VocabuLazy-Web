// Node Modules
import passport from 'koa-passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { Strategy as FacebookStrategy } from 'passport-facebook';
// Config
import config from '../config';

const { baseURL, oAuth } = config;
const verify = (token: string, refreshToken: string, profile: any, done: any) => {
  const user = {
    provider: profile.provider,
    ID: profile.id,
    name: profile.displayName,
    avatar: profile.photos[0].value
  };
  done(null, user);
};

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

passport.use(new GoogleStrategy(
  {
    clientID: oAuth.google.clientID,
    clientSecret: oAuth.google.clientSecret,
    callbackURL: oAuth.google.callbackURL
  },
  verify
));

passport.use(new FacebookStrategy(
  {
    clientID: oAuth.facebook.clientID,
    clientSecret: oAuth.facebook.clientSecret,
    callbackURL: oAuth.facebook.callbackURL,
    profileFields: ['id', 'displayName', 'photos']
  },
  verify
));

export default passport;