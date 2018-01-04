let co = require("co");
let { MD5 } = require("../utils/libs");
module.exports = app => {
  class Model {
    constructor(ctx) {
      this.ctx = ctx;
    }

    *revokeToken(token) {
      console.log("revokeToken");
    }
    *getAuthorizationCode(authorizationCode) {
      console.log("getAuthorizationCode");
    }
    *saveAuthorizationCode(code, client, user) {
      console.log("saveAuthorizationCode");
    }
    *revokeAuthorizationCode(code) {
      console.log("revokeAuthorizationCode");
    }

    *getClient(clientId, clientSecret) {
      if (
        clientId !== "eggClient" &&
        clientSecret !== "SD123dfjhgiy28dsjkfbi12hu3ui"
      ) {
        return;
      }
      return { clientId, clientSecret, grants: ["password"] };
    }
    *grantTypeAllowed(clientId, grantType) {
      let allowed = false;
      if (grantType === "password" && clientId === "eggClient") {
        allowed = true;
      }
      return true;
    }

    *getUser(username, password) {
      return co(
        app.mysql.get("web_admin", {
          name: username
        })
      ).then(
        function(data) {
          if (!data) {
            return;
          }
          if (MD5(password) == data.pass) {
            return { id: data.uid };
          } else {
            return;
          }
        },
        function(err) {
          console.error(err.stack);
          return;
        }
      );
    }
    *saveToken(token, client, user) {
      const _token = Object.assign({}, token, { user }, { client });
      co(
        app.mysql.update(
          "web_admin",
          {
            accessToken: token.accessToken,
            expires: token.accessTokenExpiresAt,
            clientId: client.clientId
          },
          {
            where: {
              uid: user.id
            }
          }
        )
      ).then(
        function(data) {
          console.error(data);
          return _token;
        },
        function(err) {
          console.error(err.stack);
          return;
        }
      );

      return _token;
    }
    *getAccessToken(bearerToken) {
      return co(
        app.mysql.get("web_admin", {
          accessToken: bearerToken
        })
      ).then(function(data) {
        if (data) {
          const user = { name: data.name, id: data.uid };
          const client = {};
          let token = {};
          token.user = user;
          token.client = {
            clientId: "eggClient",
            clientSecret: "SD123dfjhgiy28dsjkfbi12hu3ui",
            grants: ["password"]
          };
          token.accessTokenExpiresAt = new Date(data.expires);
          token.refreshTokenExpiresAt = new Date(data.expires);
          return token;
        } else {
          return false;
        }
      });
    }
  }

  return Model;
};
