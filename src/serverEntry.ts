// Modules
import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import logger from 'koa-logger';
// Config
import config from './lib/config';
// Routers
import router from './server/routes/index';

const app = new Koa();

app
  .use(logger())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('public'))
  .listen(config.port, () => console.info(`Server started 🌎`));