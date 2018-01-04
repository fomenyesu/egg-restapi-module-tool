"use strict";

const request = require("supertest");
const assert = require("assert");
const mock = require("egg-mock");

describe("test/controller/tableinfo.test.js", () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe("GET /api/table", () => {
    it("should status 200 and get the body", () => {
      return request(app.callback())
        .get("/api/table")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          assert(response.body.success, true);
        });
    });

    it("should send multi requests", function*() {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get("/api/table")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          assert(response.body.success, true);
        });

      // 再请求一次
      yield request(app.callback())
        .get("/api/table")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          assert(response.body.success, true);
        });
    });
  });

  describe("GET /api/table/web_admin", () => {
    it("should status 200 and get the body", () => {
      return request(app.callback())
        .get("/api/table/web_admin")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          assert(response.body.success, true);
        });
    });

    it("should send multi requests", function*() {
      // 使用 generator function 方式写测试用例，可以请求地发起多次请求
      yield request(app.callback())
        .get("/api/table/web_admin")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          assert(response.body.success, true);
        });

      // 再请求一次
      yield request(app.callback())
        .get("/api/table/web_admin")
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
          assert(response.body.success, true);
        });
    });
  });

  describe("POST /api/table", () => {
    it("should status 200 and get the request body", () => {
      app.mockCsrf();
      return request(app.callback())
        .post("/api/table")
        .type("form")
        .send({
          tableName: "nadmin",
          data: [
            {
              Field: "uid",
              Type: "int(10)",
              Null: "NO",
              Key: "PRI",
              Default: null,
              Extra: "auto_increment"
            },
            {
              Field: "name",
              Type: "varchar(20)",
              Null: "NO",
              Key: "UNI",
              Default: null,
              Extra: ""
            },
            {
              Field: "pass",
              Type: "varchar(50)",
              Null: "NO",
              Key: "",
              Default: null,
              Extra: ""
            },
            {
              Field: "status",
              Type: "int(1)",
              Null: "NO",
              Key: "",
              Default: null,
              Extra: ""
            },
            {
              Field: "time",
              Type: "int(11)",
              Null: "NO",
              Key: "",
              Default: null,
              Extra: ""
            }
          ]
        })
        .expect(200);
    });
  });

  describe("PUT /api/table", () => {
    it("should status 200 and get the request body", () => {
      app.mockCsrf();
      return request(app.callback())
        .put("/api/table")
        .send({
          tableName: "nadmin",
          data: [
            {
              Field: "uid1",
              Type: "int(10)",
              Null: "NO",
              Key: "PRI",
              Default: null,
              Extra: "auto_increment"
            },
            {
              Field: "name",
              Type: "varchar(20)",
              Null: "NO",
              Key: "UNI",
              Default: null,
              Extra: ""
            },
            {
              Field: "pass",
              Type: "varchar(50)",
              Null: "NO",
              Key: "",
              Default: null,
              Extra: ""
            },
            {
              Field: "status",
              Type: "int(1)",
              Null: "NO",
              Key: "",
              Default: null,
              Extra: ""
            },
            {
              Field: "time",
              Type: "int(11)",
              Null: "NO",
              Key: "",
              Default: null,
              Extra: ""
            }
          ]
        })
        .expect(200);
    });
  });
  describe("DELETE /api/table/nadmin", () => {
    it("should status 200 and get the request body", () => {
      app.mockCsrf();
      return request(app.callback())
        .delete("/api/table/nadmin")
        .expect(200);
    });
  });
});
