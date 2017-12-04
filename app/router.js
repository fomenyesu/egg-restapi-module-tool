
// const cors = require('koa-cors');

module.exports = app => {
    console.log(app.oAuth2Server);
  app.get('/', 'client.index');
  app.post('/api/upload',app.oAuth2Server.authenticate(), 'uploadfile');

  app.get('/api/restql/:res','restql.index');
  app.get('/api/restql/:res/:id','restql.show');
  app.post('/api/restql/:res',app.oAuth2Server.authenticate(), 'restql.create');
  app.put('/api/restql/:res/:id',app.oAuth2Server.authenticate(), 'restql.update');
  app.del('/api/restql/:res/:id',app.oAuth2Server.authenticate(), 'restql.destroy');

  app.get('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.index');
  app.get('/api/table/:res',app.oAuth2Server.authenticate(), 'tableinfo.show');
  app.post('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.create');
  app.put('/api/table',app.oAuth2Server.authenticate(), 'tableinfo.update');
  app.del('/api/table/:res',app.oAuth2Server.authenticate(), 'tableinfo.destroy');


  app.all('/oauth2/access_token', app.oAuth2Server.token());
  app.post('/user/authorize', app.oAuth2Server.authenticate(), 'user.authenticate');
  app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');
};