module.exports = app => {
  class TableinfoService extends app.Service {
    *index() {
      const queryStr = "show tables;";
      let result = [];
      let record = yield this.app.mysql.query(queryStr, "");
      for (let i in record) {
        result.push(
          record[i][`Tables_in_${this.app.config.mysql.client.database}`]
        );
      }
      return result;
    }
    *show(params) {
      const tableName = params.res;
      const queryStr = `desc ${tableName};`;
      let record = yield this.app.mysql.query(queryStr, "");
      return record;
    }
    *primaryKey(tableName) {
      const queryStr = `desc ${tableName};`;
      let record = yield this.app.mysql.query(queryStr, "");
      let result = "";
      for (var i = record.length - 1; i >= 0; i--) {
        if (record[i]["Key"] == "PRI") {
          result = record[i]["Field"];
        }
      }
      return result;
    }
    *create(request) {
      //建立新表
      const tableName = request.tableName;
      const requestData = request.data;
      let queryStr = "CREATE TABLE IF NOT EXISTS " + tableName + "(";
      let primaryKey = "";
      for (let i = 0; i < requestData.length; i++) {
        let tempNull = requestData[i]["Null"] == "NO" ? "NOT NULL" : "";
        let tempIncre =
          requestData[i]["Extra"] == "auto_increment" ? "AUTO_INCREMENT" : "";
        queryStr =
          queryStr +
          requestData[i]["Field"] +
          " " +
          requestData[i]["Type"] +
          " " +
          tempNull +
          " " +
          tempIncre +
          ", ";
        if (requestData[i]["Key"] == "PRI") {
          primaryKey = requestData[i]["Field"];
        }
      }
      if (primaryKey == "") {
        return "请设置主键";
      }
      queryStr =
        queryStr +
        "PRIMARY KEY ( " +
        primaryKey +
        " ))ENGINE=InnoDB DEFAULT CHARSET=utf8;";
      let record = yield this.app.mysql.query(queryStr, "");
      return record;
    }
    *destroy(params) {
      const tableName = params.res.split(",");
      let queryStr, record;
      for (var i = tableName.length - 1; i >= 0; i--) {
        queryStr = `DROP TABLE IF EXISTS ${tableName[i]};`;
        record = yield this.app.mysql.query(queryStr, "");
      }

      return record;
    }
  }
  return TableinfoService;
};
