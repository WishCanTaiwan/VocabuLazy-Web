// Node Modules
import Router from 'koa-router';
// Lib
import passport from '../lib/auth';

const router = new Router();

router.get(
  '/login/google',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get(
  '/login/facebook',
  passport.authenticate('facebook')
);

router.get(
  '/logout',
  async (ctx) => {
    ctx.logout();
    ctx.redirect('/');
  }
);

const options = {
  successRedirect: '/',
  failureRedirect: '/'
};

router.get(
  '/callback/google',
  passport.authenticate('google', options)
);

router.get(
  '/callback/facebook',
  passport.authenticate('facebook', options)
);

router.get(
  '/user',
  async (ctx) => ctx.body =
    ctx.session && ctx.session.passport && ctx.session.passport.user
      ? ctx.session.passport
      : {}
);

export default router;