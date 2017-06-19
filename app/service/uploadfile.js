const coFs      = require('co-fs'),
      fs        = require('fs'),
      path      = require('path');
      demoFile = path.join(__dirname, 'demo.jpg');

module.exports = app => {
  class UploadfileService extends app.Service {
    * upload(request) {
      const file = request.files.file;
      if (+this.request.body.fields.fileLen !== file.size) {
        this.status = 403;
        return this.body = {msg: '传输数据大小校验不一致, 请重试'};
      }

      this.body = yield new Promise((resolve, reject) => {
        fs
          .createReadStream(file.path)
          .pipe(fs.createWriteStream(demoFile))
          .on('finish', function () {
              resolve({
                  mtime: file.mtime,
                  name : file.name,
                  size : file.size,
                  type : file.type,
                  src  : demoSrc
              });
          });
      });
    }
  }
  return UploadfileService;
};
