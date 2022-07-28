import { View } from "@tarojs/components";
import { useState } from "react";
import { AtList, AtListItem, AtLoadMore } from "taro-ui";

import './index.less';

interface IListProps {
  data: any[];
}

const Name = 'cmpt-list';

const List: React.FC<IListProps> = ({
  data = [],
}) => {
  const [status, setStatus] = useState<"more" | "loading" | "noMore" | undefined>('more');

  const handleMore = () => {
    setStatus('loading');

    // 模拟异步请求数据
    setTimeout(() => {
      // 没有更多了
      setStatus('noMore');
    }, 2000)
  }
  
  return (
    <View className={`${Name}-scroll`}>
      <AtList>
        {data.map(item => (
          <AtListItem
            key={item.id}
            title={item.title}
            note={item.desc}
            thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
          />
        ))}
      </AtList>
      <AtLoadMore
        onClick={handleMore}
        status={status}
      />
    </View>
  );
};

export default List;