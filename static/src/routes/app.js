import React, { PropTypes } from "react";
import { connect } from "dva";
import Login from "./login";
import { Layout } from "../components";
import { Spin, Modal, Input, message } from "antd";
import { classnames, config } from "../utils";
import { Helmet } from "react-helmet";
import "../components/skin.less";
import Cookie from "../utils/js.cookie";
import { withRouter } from "dva/router";

const { Header, Bread, Footer, Sider, styles } = Layout;
let loginPage = "";

const App = ({ children, location, dispatch, app, loading }) => {
  if (!loginPage) {
    loginPage = window.location.href;
  }
  const {
    login,
    loginButtonLoading,
    user,
    siderFold,
    darkTheme,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys
  } = app;
  const loginProps = {
    loading,
    loginButtonLoading,
    onOk(data) {
      dispatch({ type: "app/login", payload: data });
    }
  };

  const headerProps = {
    user,
    siderFold,
    location,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover() {
      dispatch({ type: "app/switchMenuPopver" });
    },
    logout() {
      // const href = window.location.origin + '/';
      Cookie.remove("SESSION_NP");
      Cookie.remove("SESSION_TOKEN");
      const href = loginPage.split("#")[0];
      window.open(href, "_self");
    },
    changePassword() {
      dispatch({ type: "app/showPasswordModal" });
    },
    switchSider() {
      dispatch({ type: "app/switchSider" });
    },
    changeOpenKeys(openKeys) {
      localStorage.setItem("navOpenKeys", JSON.stringify(openKeys));
      dispatch({
        type: "app/handleNavOpenKeys",
        payload: { navOpenKeys: openKeys }
      });
    }
  };

  const updatePassword = () => {
    const passwd = document.getElementById("passwd");
    dispatch({
      type: "app/changePassword",
      payload: {
        password: passwd.value,
        name: app.user.name,
        uid: app.user.uid,
        callback: data => {
          if (data && data.success) {
            message.success("更新成功");
            passwd.value = "";
          } else {
            message.error("更新失败");
          }
        }
      }
    });
  };

  const siderProps = {
    siderFold,
    darkTheme,
    location,
    navOpenKeys,
    changeTheme() {
      dispatch({ type: "app/changeTheme" });
    },
    changeOpenKeys(openKeys) {
      localStorage.setItem("navOpenKeys", JSON.stringify(openKeys));
      dispatch({
        type: "app/handleNavOpenKeys",
        payload: { navOpenKeys: openKeys }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>RestAPI Module</title>
        <link rel="icon" href={config.logoSrc} type="image/x-icon" />
        {config.iconFontUrl ? <script src={config.iconFontUrl} /> : ""}
      </Helmet>
      {login ? (
        <div
          className={classnames(
            styles.layout,
            { [styles.fold]: isNavbar ? false : siderFold },
            { [styles.withnavbar]: isNavbar }
          )}
        >
          {!isNavbar ? (
            <aside
              className={classnames(styles.sider, {
                [styles.light]: !darkTheme
              })}
            >
              <Sider {...siderProps} />
            </aside>
          ) : (
            ""
          )}
          <div className={styles.main}>
            <Header {...headerProps} />
            <Bread location={location} />
            <div className={styles.container}>
              <div className={styles.content}>{children}</div>
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div className={styles.spin}>
          <Spin tip="加载用户信息..." spinning={!!loading} size="large">
            <Login {...loginProps} />
          </Spin>
        </div>
      )}

      <Modal
        visible={app.passwordModalVisible}
        title="修改密码(只是显示，不做真实的功能业务)"
        onOk={updatePassword}
        okText="更新"
        onCancel={() => dispatch({ type: "app/hidePasswordModal" })}
      >
        <Input type="password" id="passwd" placeholder="请输入新的密码" />
      </Modal>
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object,
  loading: PropTypes.bool
};

export default withRouter(
  connect(({ app, loading }) => ({ app, loading: loading.models.app }))(App)
);
// export default connect(({ app, loading }) => ({ app, loading: loading.models.app }))(App)
