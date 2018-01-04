"use strict";

const request = require("supertest");
const assert = require("assert");
const mock = require("egg-mock");

describe("test/controller/restql.test.js", () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe("GET api/restql/web_admin", () => {
    it("should status 200 and get the body", () => {
      return request(app.callback())
        .get("/api/restql/web_admin")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("should send multi requests", function*() {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get("/api/restql/web_admin")
        .expect("Content-Type", /json/)
        .expect(200);

      // 再请求一次
      yield request(app.callback())
        .get("/api/restql/web_admin")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("GET /api/restql/web_admin/1", () => {
    it("should status 200 and get the body", () => {
      return request(app.callback())
        .get("/api/restql/web_admin/1")
        .expect("Content-Type", /json/)
        .expect(200);
    });

    it("should send multi requests", function*() {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get("/api/restql/web_admin/1")
        .expect("Content-Type", /json/)
        .expect(200);

      // 再请求一次
      yield request(app.callback())
        .get("/api/restql/web_admin/1")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("POST /api/restql/web_admin", () => {
    it("should status 200 and get the request body", () => {
      app.mockCsrf();
      return request(app.callback())
        .post("/api/restql/web_admin")
        .type("form")
        .send({
          uid: 3,
          name: "aboutus",
          pass: "httml",
          status: 1,
          time: "1325472736"
        })
        .expect(200);
    });
  });

  describe("PUT /api/restql/web_admin/3", () => {
    it("should status 200 and get the request body", () => {
      app.mockCsrf();
      return request(app.callback())
        .put("/api/restql/web_admin/3")
        .send({ status: 0 })
        .expect(200);
    });
  });
  describe("DELETE /api/restql/web_admin/3", () => {
    it("should status 200 and get the request body", () => {
      app.mockCsrf();
      return request(app.callback())
        .delete("/api/restql/web_admin/3")
        .expect(200);
    });
  });
});
