import { Image, View } from '@tarojs/components';
import React, { useState } from 'react';
import { AtSearchBar, AtTag } from 'taro-ui';

import AddIcon from '../../images/add-circle.svg';

import './index.less';

type paramType = {
  label: string;
  value: string;
}

interface ISearchProps {
  onSearch: (v: string, params?: string[]) => void;
  params?: paramType[];
}

const Name = 'cmpt-search';

const Search: React.FC<ISearchProps> = ({
  onSearch, params = [],
}) => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState(['all']);

  const handleSelect = (data: paramType) => {
    const newSelected = [...selected];
    const i = newSelected.findIndex(item => item === data.value);
    if (i !== -1) {
      newSelected.splice(i, 1);
    } else {
      newSelected.push(data.value);
    }
    onSearch(value, newSelected);
    setSelected(newSelected);
  };

  return (
    <View className={Name}>
      <Image className={`${Name}-add`} src={AddIcon} />
      <AtSearchBar
        // fixed
        className={`${Name}-input`}
        value={value}
        onChange={setValue}
        onActionClick={() => onSearch(value)}
      />
      {
        params.length > 0 ? (
          <View className={`${Name}-filters`}>
            {params.map(item => (
              <AtTag 
                className={`${Name}-filters-tag`}
                key={item.value}
                name={item.label} 
                active={selected.includes(item.value)}
                type='primary' 
                circle 
                onClick={() => handleSelect(item)}
              >
                {item.label}
              </AtTag>
            ))}
          </View>
        ) : null
      }
    </View>
  );
};

export default Search;