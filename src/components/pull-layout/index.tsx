import { View } from '@tarojs/components';
import Taro, { usePullDownRefresh } from '@tarojs/taro';
import React, { ReactElement, useState } from 'react';
import { AtActivityIndicator } from 'taro-ui';

import './index.less';

type PullLayoutProps = {
  children: ReactElement;
  onFresh?: () => void;
}

function Index (props: PullLayoutProps) {
  const [pullLoading, setPullLoading] = useState(false);

  const { children, onFresh } = props;

  
  usePullDownRefresh(async () => {
    setPullLoading(true);
 
    await onFresh?.();

    setPullLoading(false);
    Taro.stopPullDownRefresh();
  })
  
  return (
    <View className='pull-container'>
      <View className='pull-loading'>
        <AtActivityIndicator mode='center' isOpened={pullLoading}></AtActivityIndicator>
      </View>
      <View className={`pull-content ${!pullLoading ? 'pull-ing' : ''}`}>{children}</View>
    </View>
  )
}

export default Index;