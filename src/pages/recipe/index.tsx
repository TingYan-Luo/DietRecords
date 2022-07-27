import { View } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { AtGrid } from "taro-ui";
import { RecipeChild } from "../../routers";

import './index.less';

const Recipe: React.FC<any> = () => {
  const dataList = RecipeChild.map(item => ({ value: item.text, path: `/${item.pagePath}` }));
  const handleClick = (item: any) => {
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: item.path,
    })
  };
  return (
    <View className='container'>
      <AtGrid mode='square' hasBorder={false} data={dataList} columnNum={2} onClick={handleClick} />
    </View>
  );
};

export default Recipe;