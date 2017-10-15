// Node Modules
import Router from 'koa-router';
// Routers
import auth from './auth';

const publicRouter = new Router();

publicRouter
  .use('/api/auth', auth.routes())
  .get('/', async (ctx) => {
    if (ctx.isAuthenticated()) {
      const resp =
        ctx.session && ctx.session.passport && ctx.session.passport.user
          ? ctx.session.passport.user
          : {};
      ctx.body = JSON.stringify(resp, null, 2);
    } else {
      ctx.body = 'Welcome!';
    }
  });

export {
  publicRouter,
};
