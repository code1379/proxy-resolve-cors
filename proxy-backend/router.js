const Router = require('@koa/router');
const axios = require('axios');

// axios
axios.defaults.baseURL = 'http://localhost:8888';
axios.defaults.timeout = 5000;

const getFriends = () => {
  return axios.get('/api/friends');
};


// 路由
const router = new Router({prefix: "/api"});

router.get('/friends', async (ctx, next) => {
  let result = null;
  try {
    result = await getFriends();
  } catch (err) {
    console.log(err);
  }
  const { data } = result;
  ctx.body = data;
  await next();
});

module.exports = router