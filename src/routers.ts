export const Routes = [
  {
    pagePath: 'pages/index/index',
    selectedIconPath: 'images/calendar-fill.png',
    iconPath: 'images/calendar.png',
    text: '首页',
    // nav: true,
  },
  {
    pagePath: 'pages/recipe/index',
    selectedIconPath: 'images/modular-fill.png',
    iconPath: 'images/modular.png',
    text: '食谱',
    // nav: true,
  },
  {
    pagePath: 'pages/user/index',
    selectedIconPath: 'images/people_fill.png',
    iconPath: 'images/people.png',
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