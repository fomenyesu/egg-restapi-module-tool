module.exports = app => {
  class UsersService extends app.Service {
    * login(request) {
      let condition = {name:request.name};
      let record =  yield this.app.mysql.get('web_admin', condition);
      return record;
    }
  }
  return UsersService;
};

  