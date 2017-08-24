// Info
import info from '../../package.json';

const config = {
  isDev: process.env.NODE_ENV === 'development',
  port: 80,
  version: info.version,
  baseURL: 'http://localhost',
  oAuth: {
    google: {
      clientID: '70011846552-psac0vjm9bpqe4kqei191rjj6en9b6ls.apps.googleusercontent.com',
      clientSecret: 'U_j2GQXYpUsAubdskrkmgyEX',
      callbackURL: '/api/auth/callback/google',
    },
    facebook: {
      clientID: '738211496363289',
      clientSecret: '7d91cdc7cd5cd446556c3aa64be20f74',
      callbackURL: '/api/auth/callback/facebook',
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