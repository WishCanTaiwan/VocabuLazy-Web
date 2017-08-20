// Node Modules
import Router from 'koa-router';
// Lib
import passport from '../lib/auth';

const router = new Router();

router.get(
  '/login',
  passport.authenticate('google', { scope: ['profile'] })
);

router.get(
  '/logout',
  async (ctx) => {
    ctx.logout();
    ctx.redirect('/');
  }
);

router.get(
  '/callback',
  passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
  )
);

router.get(
  '/user',
  async (ctx) => ctx.body =
    ctx.session && ctx.session.passport && ctx.session.passport.user
      ? ctx.session.passport
      : {}
);

export default router;