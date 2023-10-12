import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from '../icon';

interface Props {
  onPress: () => void;
  iconName?: string;
  children?: React.ReactNode;
}

const TextButton: React.FC<Props> = ({ onPress, iconName, children }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center bg-transparent p-2 m-1"
    >
      <Text
        className={`dark:text-white text-black underline font-inconsolata uppercase ${
          iconName && 'mr-2'
        }`}
      >
        {children}
      </Text>
      {iconName && (
        <Icon name={iconName} size={24} color="black" darkColor="white" />
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
