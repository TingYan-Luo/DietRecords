import { View } from "@tarojs/components";
import Search from "@/components/search";
import PullLayout from "@/components/pull-layout";
import List from "@/components/list";
import { RecipeData } from "@/mock/mock";

import './index.less';

/** 食谱数据类型 */
export type RecipeType = {
  id: string;
  title: string;
  desc?: string;
  image: string;
}

const Name = 'recipe-list';
const RecipeList: React.FC<any> = () => {
  // const [pullLoading, setPullLoading] = useState(false);
  const fetchList = (keyword?: string, params: string[] = []) => {
    console.log('search', keyword, params);
  };

  const filters = [
    { label: '全部', value: 'all' },
    { label: '肉类', value: 'meat' },
    { label: '蔬菜', value: 'vegetable' },
    { label: '蔬菜1', value: 'vegetable1' },
    { label: '蔬菜2', value: 'vegetable2' },
    { label: '蔬菜3', value: 'vegetable3' },
    { label: '蔬菜4', value: 'vegetable4' },
  ]

  return (
    <PullLayout>
      <View className={Name}>
        <Search onSearch={fetchList} params={filters} />
        <List data={RecipeData} />
      </View>
    </PullLayout>
  );
};

export default RecipeList;