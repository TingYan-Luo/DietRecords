import { View } from "@tarojs/components";
import React from "react";
import { AtCalendar } from "taro-ui"
import { MealData } from "@/mock/mock";
import MealCard, { MealConfig, MealType } from "./meal-card";

import './index.less'

const Name = 'index';

const Index = () => {
  return (
    <View className='wrapper'>
      <AtCalendar className={`${Name}-calendar`} />
      <View className={`${Name}-meals`}>
        {Object.keys(MealConfig).map(item => (
          <MealCard key={item} type={item as MealType} data={MealData[item]} />
        ))}
      </View>
    </View>
  );
};

export default Index;
