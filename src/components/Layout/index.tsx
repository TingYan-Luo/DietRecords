import { View } from '@tarojs/components';
import React from 'react';
// import Menu from '../../pages/Menu';

interface ILayoutProps {
  children: React.ReactElement;
  [key: string]: any;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <View id='root' {...rest}>
      {children}
      {/* <Menu /> */}
    </View>
  )
};

export default Layout;

