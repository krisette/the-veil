import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface Props {
  onPress: () => void;
  iconName?: string;
  children?: React.ReactNode;
}

const TextButton: React.FC<Props> = ({ onPress, iconName, children }) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row items-center bg-transparent border-1 border-white p-2 m-1 rounded-5">
      <Text className="text-white underline font-inconsolata uppercase mr-2">{children}</Text>
      {iconName && (
        <FontAwesome name={iconName} size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default TextButton;
