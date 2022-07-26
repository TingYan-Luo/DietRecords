export const Routes = [
  {
    pagePath: 'pages/index/index',
    // selectedIconPath: 'images/tabbar_home_on.png',
    // iconPath: 'images/tabbar_home.png',
    text: '首页',
    // nav: true,
  },
  {
    pagePath: 'pages/recipe/index',
    // selectedIconPath: 'images/tabbar_cate_on.png',
    // iconPath: 'images/tabbar_cate.png',
    text: '食谱',
    // nav: true,
  },
  {
    pagePath: 'pages/user/index',
    // selectedIconPath: 'images/tabbar_my_on.png',
    // iconPath: 'images/tabbar_my.png',
    text: '个人中心',
    // nav: true,
  }
];

export const tabBar = {
  custom: true,
  color: '#000000',
  selectedColor: '#DC143C',
  backgroundColor: '#ffffff',
  list: Routes
};