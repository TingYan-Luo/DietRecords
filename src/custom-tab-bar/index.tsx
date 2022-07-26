import { CoverImage, CoverView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React, { useState } from 'react';
import { tabBar } from '../routers';

// import styles from './index.less';
import './index.less';

const TabBar: React.FC = () => {
  const menus = tabBar.list;
  
  const [current, setCurrent] = useState(0);

  const switchTab = (index, url) => {
    setCurrent(index);
    Taro.switchTab({ url: `/${url}` });
  };

  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {menus.map((item, index) => {
        return (
          <CoverView key={index} className='tab-bar-item' onClick={() => switchTab(index, item.pagePath)}>
            {/* <CoverImage src={current === index ? item.selectedIconPath : item.iconPath} /> */}
            <CoverView style={{ color: current === index ? tabBar.selectedColor : tabBar.color }}>{item.text}</CoverView>
          </CoverView>
        )
      })}
    </CoverView>
  )
};

export default TabBar;

