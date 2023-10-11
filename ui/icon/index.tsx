import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeNames } from './types';
import { useColorScheme } from 'react-native';

interface IconProps {
  name: FontAwesomeNames;
  size?: number;
  color?: string;
  darkColor?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000',
  darkColor = '#fff',
}) => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';
  const iconColor = isDarkMode ? darkColor : color;

  return <FontAwesome name={name} size={size} color={iconColor} />;
};

export default Icon;
