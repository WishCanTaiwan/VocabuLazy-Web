// Modules
import Koa from 'koa';
import path from 'path';
import serve from 'koa-static';
import logger from 'koa-logger';
import session from 'koa-session';
import bodyParser from 'koa-bodyparser';
// Lib
// import pino from './lib/logger';
import passport from './server/lib/auth';
import { publicRouter } from './server/routes';
// Config
import config from './server/config';

const app = new Koa();

app.keys = ['加密短語'];

if (config.isDev) {
  app.use(logger());
} else {
  app.use(serve(path.resolve('./build')));
}

app
  .use(session({}, app))
  .use(bodyParser())
  .use(logger())
  .use(passport.initialize())
  .use(passport.session())
  .use(publicRouter.routes())
  .use(publicRouter.allowedMethods())
  .listen(config.port, () => {
    const { version, port, isDev } = config;
    const icon = isDev ? '⚙️' : '🌎';
    console.info(`[Retofice v${version}] Server started on port ${port} ${icon}`);
  });