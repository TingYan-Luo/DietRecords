import { View, Text, Block } from '@tarojs/components';
import React, { useState } from 'react';
import { AtAvatar, AtButton, AtIcon } from 'taro-ui';

import { primaryColor } from '../../../common/mixin';
import './index.less';

export type MealType = 'breakfast' | 'lunch' | 'dinner';

export type MealDataType = {
  id: string;
  title: string;
  image: string;
}

interface IMealCardProps {
  type: MealType;
  data: MealDataType[];
}

export const MealConfig: Record<MealType, string> = {
  breakfast: '晨',
  lunch: '午',
  dinner: '晚',
}

const MealCard: React.FC<IMealCardProps> = ({
  type, data = [],
}) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = (id: string) => {
    console.log('delete->>>>', type, id);
  };

  return (
    <View className='meal'>
      <Text className='meal-type'>{MealConfig[type]}</Text>
      <View className='meal-list'> 
        {data.map(item => (
          <View key={item.id} className='meal-list-item'>
            <AtAvatar image={item.image} className='meal-list-item-avatar'></AtAvatar>
            <Text>{item.title}</Text>
            {isEdit && (
              <View className='close' onClick={() => handleDelete(item.id)}>
                <AtIcon value='close' size='12' color='#fff'></AtIcon>
              </View>
            )}
          </View>
        ))}
        <AtIcon className='meal-add' value='add-circle' size='30' color={primaryColor}></AtIcon>
      </View>
      <AtButton className='meal-edit' type='secondary' size='small' onClick={handleEdit}>{isEdit ? '保存' : '编辑'}</AtButton>
    </View>
  )
};

export default MealCard;