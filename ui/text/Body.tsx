import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  children?: React.ReactNode;
  className?: string;
}

const Body: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <Text
      className={`font-libreBaskerville text-default text-base ${className}`}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default Body;
