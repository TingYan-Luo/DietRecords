import { tabBar, Routes } from './routers';

export default defineAppConfig({
  pages: Routes.map(item => item.pagePath),
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar,
});
