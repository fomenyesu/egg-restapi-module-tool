exports.keys = "znkey";
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks',
  },
};
// mount middleware
exports.middleware = [
  'robot','errorHandler','apiWrapper'
];
exports.errorHandler = {
  match: '/api',
},
// middleware config
exports.robot = {
  ua: [
    /curl/i,
    /Baiduspider/i,
  ],
};


exports.security = {
  ignore: '/api/',
  domainWhiteList: ['http://127.0.0.1:8080','http://10.180.144.212:8080','http://localhost:8080'],
  methodnoallow: {enable: false },
  csrf: {
    enable: false,
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
};

exports.cors = {
  allowMethods: 'GET,HEAD,PUT,OPTIONS,POST,DELETE,PATCH'
};


exports.multipart = {
  fileExtensions: ['.xls', '.doc','.ppt','.docx','.xlsx','.pptx' ],
};

exports.oAuth2Server = {
  grants: [ 'password'],
  expires: 60,
};