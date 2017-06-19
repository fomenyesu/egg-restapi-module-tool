'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/tableinfo.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('index()', () => {
    it('should index exists tableinfo', function* () {
      const ctx = app.mockContext();
      const tableinfo = yield ctx.service.tableinfo.index();
      assert(tableinfo);
      assert(typeof(tableinfo)=="object");
    });
  });
  describe('show()', () => {
    it('should show exists tableinfo', function* () {
      const ctx = app.mockContext();
      const tableinfo = yield ctx.service.tableinfo.show({res:'web_admin'});
      assert(tableinfo);
      assert(typeof(tableinfo)=="object");
    });
  });
  describe('primaryKey()', () => {
    it('should return primaryKey', function* () {
      const ctx = app.mockContext();
      const result = yield ctx.service.tableinfo.primaryKey('web_admin');
        console.log("test console",result);
      // assert(result.ord==0);
      // assert(result.nid==5);
    });

  });
  describe('create()', () => {
    it('should create another tableinfo', function* () {
      const ctx = app.mockContext();
      const tableinfo = yield ctx.service.tableinfo.create({"tableName":"nadmin","data":[{"Field":"uid","Type":"int(10)","Null":"NO","Key":"PRI","Default":null,"Extra":"auto_increment"},{"Field":"name","Type":"varchar(20)","Null":"NO","Key":"UNI","Default":null,"Extra":""},{"Field":"pass","Type":"varchar(50)","Null":"NO","Key":"","Default":null,"Extra":""},{"Field":"status","Type":"int(1)","Null":"NO","Key":"","Default":null,"Extra":""},{"Field":"time","Type":"int(11)","Null":"NO","Key":"","Default":null,"Extra":""}]});
        console.log(tableinfo);
      assert(tableinfo);
    });

  });
  describe('destroy()', () => {
    it('should destroy exists tableinfo', function* () {
      const ctx = app.mockContext();
      const tableinfo = yield ctx.service.tableinfo.destroy({res:'nadmin'});
      assert(tableinfo);
      assert(typeof(tableinfo)=="object");
    });
  });
});