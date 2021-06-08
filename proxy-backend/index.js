const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('./router');
// app
const app = new Koa();
app.use(router.routes()).use(router.allowedMethods());

app.listen(9000, () => {
  console.log('http://localhost:9000');
});
