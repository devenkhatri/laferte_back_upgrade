module.exports = ({ env }) => ({
  url: env('MY_HEROKU_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e3fb398539745e7d0805d1edea226cb3'),
    },
  },
});
