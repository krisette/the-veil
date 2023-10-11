import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeNames } from './types';

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
  const isDarkMode = document.body.classList.contains('dark');
  const iconColor = isDarkMode ? darkColor : color;

  return <FontAwesome name={name} size={size} color={iconColor} />;
};

export default Icon;
