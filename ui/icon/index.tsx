import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeNames } from './types';

interface IconProps {
  name: FontAwesomeNames;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = '#000' }) => {
	return <FontAwesome name={name} size={size} color={color} />;
};

export default Icon;
