// Info
import info from '../../package.json';

const config = {
  isDev: process.env.NODE_ENV === 'development',
  port: 80,
  version: info.version,
  baseURL: 'http://localhost',
  callbackURL: '/api/auth/callback',
  oAuth: {
    google: {
      clientID: '70011846552-psac0vjm9bpqe4kqei191rjj6en9b6ls.apps.googleusercontent.com',
      clientSecret: 'U_j2GQXYpUsAubdskrkmgyEX'
    }
  }
};

export default config;

/*
https://accounts.google.com/o/oauth2/auth?response_type=token&
client_id=70011846552-psac0vjm9bpqe4kqei191rjj6en9b6ls.apps.googleusercontent.com&
redirect_uri=http://localhost/api/auth/callback&
scope=https://www.googleapis.com/auth/userinfo.profile+https://www.googleapis.com/auth/userinfo.email
*/