'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/restql.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('index()', () => {
    it('should index exists restql', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.restql.index('web_admin',{page:1,pageSize:5},{status:1});
      assert(result);
      assert(typeof(result)=="object");
    });

    it('should get null when restql not exists', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.restql.index('web_admin',{page:1,pageSize:5},{uid:10000});
        console.log(result);
      assert(result.totalRecord==0);
    });
  });
  describe('show()', () => {
    it('should show exists restql', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.restql.show('web_admin',{id:1});
        console.log(result);
      assert(result);
      assert(typeof(result)=="object");
    });

    it('should get null when restql not exists', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.restql.show('web_admin',{id:10000});
      assert(!result);
    });
  });
  describe('update()', () => {
    it('should update exists restql', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.restql.update('web_admin',1,{status:0});
      assert(result);
      // assert(result.uid==5);
    });

    it('should get null when restql not exists', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.restql.update('web_admin',10000,{status:0});
      assert(result.affectedRows==0);
    });
  });
  describe('create()', () => {
    it('should create exists restql', function* () {
      const ctx = app.mockContext();
      const restql = yield ctx.service.restql.create('web_admin',{name:"aboutus",pass:"httml",status:1,time:"1325472736"});
      assert(restql);
    });

  });
  describe('destroy()', () => {
    it('should destroy exists restql', function* () {
      const ctx = app.mockContext();
      const restql = yield ctx.service.restql.destroy('web_admin',{id:'5'});
      assert(restql);
      assert(typeof(restql)=="object");
    });
  });
});