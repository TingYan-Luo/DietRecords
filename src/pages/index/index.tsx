import React, { useCallback } from "react";
import { View, Text, Button, Image } from "@tarojs/components";
// import { useEnv, useNavigationBar, useModal, useToast } from "taro-hooks";
import { AtCalendar } from "taro-ui"

import './index.less'

const Index = () => {

  return (
    <View className='wrapper'>
      <AtCalendar />
    </View>
  );
};

export default Index;
