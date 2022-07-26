import React, { useEffect } from 'react'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
// import "taro-ui/dist/style/components/icon.scss";
// Taro 额外添加的 hooks 要从 '@tarojs/taro' 中引入
// import { useDidShow, useDidHide } from '@tarojs/taro';
import { Provider } from 'react-redux';
import dva from './utils/dva';
import models from './models';

// 全局样式
import './common/custom-variables.scss';
import './app.less';

const dvaApp = dva.createApp({
  initialState: {},
  models,
});
const store = dvaApp.getStore();

function App (props) {
  // 可以使用所有的 React Hooks
  // useEffect(() => {});

  // 对应 onShow
  // useDidShow(() => {});

  // 对应 onHide
  // useDidHide(() => {});

  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    <Provider store={store}>
      {props.children}
    </Provider>
  );
}

export default App;