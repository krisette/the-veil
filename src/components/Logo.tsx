import React, { useEffect, useRef } from 'react';
import { Animated, Image } from 'react-native';
import Logo from '../assets/logo.png'

const FadeInImage = ({ onAnimationComplete }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000, // 5 seconds
      useNativeDriver: true,
    }).start(() => {
      // Invoke the callback after animation completes
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    });
  }, [onAnimationComplete]); // Depend on onAnimationComplete to avoid unnecessary re-renders

  return (
    <Animated.View style={{ opacity }}>
      <Image source={Logo} style={{ width: 400, height: 400 }} />
    </Animated.View>
  );
};

export default FadeInImage;
