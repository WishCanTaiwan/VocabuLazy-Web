// Node Modules
import Router from 'koa-router';
// Routers
import auth from './auth';

const publicRouter = new Router();

publicRouter
  .use('/api/auth', auth.routes());

export {
  publicRouter
};