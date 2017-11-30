
'use strict';
//用户登录
module.exports = app => {
  class UserController extends app.Controller {
    * index() {
      this.ctx.body = 'index';
    }
    * authenticate() {
       console.log("UserController authorize");
      let {MD5} = require("../utils/libs");
      const name = this.ctx.request.body.username;
      const pass = this.ctx.request.body.password;
        console.log(name);
      const result = yield this.service.users.login({name});
      // this.ctx.headers["Access-Control-Allow-Origin"] = "*";
      // this.ctx.headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      // this.ctx.headers["Access-Control-Allow-Credentials"] = false;
      // this.ctx.headers["Access-Control-Max-Age"] = '86400'; // 24 hours
      // this.ctx.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        console.log(result);
      const response = {success: false, message: '', }
      if (result) {
        if (result.pass==MD5(pass)) {
          response.message = '登录成功'
          response.success = true
          response.user = result
        }else{
          response.message = '密码不正确'
        }
      }else{
        response.message = "用户不存在";
      }
      this.ctx.body = response;
      this.ctx.status = 200;
    }
    * authorize() {
        console.log("UserController authorize");
      let {MD5} = require("../utils/libs");
      const name = this.ctx.request.body.username;
      const pass = this.ctx.request.body.password;
        console.log(name);
      const result = yield this.service.users.login({name});
      // this.ctx.headers["Access-Control-Allow-Origin"] = "*";
      // this.ctx.headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      // this.ctx.headers["Access-Control-Allow-Credentials"] = false;
      // this.ctx.headers["Access-Control-Max-Age"] = '86400'; // 24 hours
      // this.ctx.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        console.log(result);
      const response = {success: false, message: '', }
      if (result) {
        if (result.pass==MD5(pass)) {
          response.message = '登录成功'
          response.success = true
          response.user = result
        }else{
          response.message = '密码不正确'
        }
      }else{
        response.message = "用户不存在";
      }
      this.ctx.body = response;
      this.ctx.status = 200;
    }
  }
  return UserController;
};