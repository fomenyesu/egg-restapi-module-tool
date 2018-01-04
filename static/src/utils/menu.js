module.exports = [
  {
    key: "tableManager",
    name: "模块管理", //模块
    icon: "database",
    child: [
      {
        key: "create",
        name: "新建模块",
        icon: "file",
        isMenuTab: false,
        clickable: false
      },
      {
        key: "edit",
        name: "修改模块",
        icon: "laptop",
        isMenuTab: false,
        clickable: false
      },
      {
        key: "info",
        name: "模块详情",
        icon: "setting",
        isMenuTab: false,
        clickable: false
      }
    ]
  },
  {
    key: "showApi",
    name: "接口管理",
    icon: "api",
    child: [
      {
        key: "info",
        name: "接口详情",
        icon: "code-o",
        isMenuTab: false,
        clickable: false
      }
    ]
  }
];
// icon: 'laptop',
// icon: 'user',
// icon: 'shopping-cart',
// icon: 'api',
// icon: 'camera-o',
// icon: 'heart-o',
// icon: 'database',
// icon: 'bars',
// icon: 'search',
// icon: 'edit',
// icon: 'credit-card',
// icon: 'code-o',
// icon: 'line-chart',
// icon: 'bar-chart',
// icon: 'area-chart',
// icon: 'setting',
