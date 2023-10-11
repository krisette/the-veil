import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { FontAwesomeNames } from '../icon/types';
import Icon from '../icon';

interface Props {
  onPress: () => void;
  iconLeft?: FontAwesomeNames;
  iconRight?: FontAwesomeNames;
  size: 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
}

const FilledButton: React.FC<Props> = ({
  onPress,
  iconLeft,
  iconRight,
  size = 'medium',
  className,
  children,
}) => {
  const sizeMap = {
    small: {
      padding: 'p-1',
      text: 'text-sm',
      iconMargin: 'ml-1 mr-1',
    },
    medium: {
      padding: 'p-2',
      text: 'text-base',
      iconMargin: 'ml-2 mr-2',
    },
    large: {
      padding: 'p-4',
      text: 'text-lg',
      iconMargin: 'ml-4 mr-4',
    },
  };

  const sizeClasses = sizeMap[size] || sizeMap['medium'];

  const textClasses = [
    'text-background',
    'font-inconsolata',
    'uppercase',
    sizeClasses.text,
    iconLeft && sizeClasses.iconMargin.split(' ')[0],
    iconRight && sizeClasses.iconMargin.split(' ')[1],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center bg-white dark:bg-black border border-white dark:border-black ${sizeClasses.padding} m-1 rounded-5 ${className}`}
    >
      <View className="flex-row items-center px-3">
        {iconLeft && (
          <Icon name={iconLeft} size={24} color="black" darkColor="white" />
        )}
        <Text className={textClasses}>{children}</Text>
        {iconRight && (
          <Icon name={iconRight} size={24} color="black" darkColor="white" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FilledButton;
