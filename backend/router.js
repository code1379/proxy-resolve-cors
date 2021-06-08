const Router = require('@koa/router');

const router = new Router({ prefix: '/api' });

router.get('/friends', async (ctx, next) => {
  const friends = [
    { name: 'dell' },
    { name: 'huangyi' },
    { name: 'why' },
    { name: 'shuangyue' }
  ];
  ctx.body = friends
});

module.exports = router;