# Egg Restapi Module Tool

主要实现通过配置模块表跟表结构来生成对应的restful api 接口的功能。一个使用 eggjs, react, antd, dva, webpack, mysql, restful api的实例。

系统主要包括两个功能：
1 模块管理 对模块表进行管理，实现模块表的CRUD操作
2 接口管理 提供接口说明，已经接口调试器方便进行接口调试。

![login.png](http://api.dll0.com/public/img/login.png)
![page1.png](http://api.dll0.com/public/img/page1.png)
![page2.png](http://api.dll0.com/public/img/page2.png)
![page3.png](http://api.dll0.com/public/img/page3.png)

# Examples for [egg](https://github.com/eggjs/egg/)

1 前端使用react+Antd+Dva实现页面功能
2 后端使用eggjs+mysql实现
3 使用npm run dev进行开发
4 npm run build 直接进行构建
5 可作egg项目的简单的boilerplate使用

## 开发

#### 安装

install mysql
start mysql
import testdb.sql to mysql

```
npm install
```
#### 使用说明

run npm to start server

```
npm run dev
```

前端开发地址：  http://localhost:8080
后端开发地址：  http://localhost:7001

也可以使用：
npm run dev_static 开发前端react+antd的页面
npm run server 开发后端服务器的逻辑
npm run dev 同时开发前后端的业务


## Distribute

```bash
$ npm run build
$ npm run pro
```

npm run build 构建前端代码，前端代码会自动复制到后端目录里面
npm run pro 在服务器启动egg服务，部署上线
访问地址： 
http://serverIP:7001

## REST API Example

api/restql/users GET List

```javascript
{
"meta":{"total":3},
"data":[
{"_id":"58d8a899f5f2486f1f6d4236","uid":1,"name":"admin","pass":"123","status":1,"time":"1325472736"},
{"_id":"58db7828a14b14815447cf33","name":"sdf","pass":"123","status":1,"time":"1325472736","uid":3,"__v":0},
{"_id":"58db7d3bcee4d48df6f5bdfd","name":"sdddf","pass":"123","status":1,"time":"1325472736","uid":4,"__v":0}
]
}
```

api/restql/users/1 GET Single Data

```javascript
{
"meta":{"total":1},
"data":[
{"_id":"58d8a899f5f2486f1f6d4236","uid":1,"name":"admin","pass":"123","status":1,"time":"1325472736"}
]
}
```

api/restql/users/2 PUT Update data with uid

```javascript
{"name":"admin123","pass":"123","status":1,"time":"1325472736"}
```

api/restql/users POST insert data

```javascript
{"name":"admin123","pass":"123","status":1,"time":"1325472736"}
```

api/restql/users/2 DELETE Delete data with uid

```javascript
{message:"success"}
```

其他新增的模块都会自动生成这5种restful API请求接口。
