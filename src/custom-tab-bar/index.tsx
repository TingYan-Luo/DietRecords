import { CoverImage, CoverView } from '@tarojs/components';
import Taro from '@tarojs/taro';
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { GlobalState } from 'src/models/types';
import { IUserModelState } from 'src/models/user';
import { tabBar } from '../routers';

// import styles from './index.less';
import './index.less';

interface ITabBarProps {
  user: IUserModelState;
}

const TabBar: React.FC<ITabBarProps> = (props) => {
  const menus = tabBar.list;
  const dispatch = useDispatch();

  const switchTab = (index, url) => {
    dispatch({
      type: 'user/save',
      payload: {
        tab: index,
      }
    });
    Taro.switchTab({ url: `/${url}` });
  };

  return (
    <CoverView className='tab-bar'>
      <CoverView className='tab-bar-border'></CoverView>
      {menus.map((item, index) => {
        return (
          <CoverView key={item.pagePath} className='tab-bar-item' onClick={() => switchTab(index, item.pagePath)}>
            <CoverImage src={`../${props.user.tab === index  ? item.selectedIconPath : item.iconPath}`} />
            {/* <CoverView style={{ color: current === index ? tabBar.selectedColor : tabBar.color }}>{item.text}</CoverView> */}
          </CoverView>
        )
      })}
    </CoverView>
  )
};

export default connect((store: GlobalState) => ({ user: store.user }))(TabBar);

