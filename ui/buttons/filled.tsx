import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesomeNames } from '../icon/types';
import Icon from '../icon';

interface Props {
  onPress: () => void;
  iconLeft?: FontAwesomeNames;
  iconRight?: FontAwesomeNames;
  size: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

const FilledButton: React.FC<Props> = ({
  onPress,
  iconLeft,
  iconRight,
  size = 'medium',
  children,
}) => {
  const textSizeClass =
    size === 'large' ? 'text-lg' : size === 'small' ? 'text-sm' : 'text-base';

  const sizes = {
    small: '1',
    medium: '2',
    large: '4',
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center bg-white border border-white p-${sizes[size]} m-1 rounded-5`}
    >
      <View className="flex-row items-center px-3">
        {iconLeft && <Icon name={iconLeft} size={24} color="black" />}
        <Text
          className={`text-background underline font-inconsolata uppercase ${textSizeClass} ${
            iconLeft && `ml-${sizes[size]}`
          } ${iconRight && `mr-${sizes[size]}`}`}
        >
          {children}
        </Text>
        {iconRight && <Icon name={iconRight} size={24} color="black" />}
      </View>
    </TouchableOpacity>
  );
};

export default FilledButton;
