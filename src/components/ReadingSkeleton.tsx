import React, { useEffect, useState } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

const ReadingSkeleton = () => {
  const [index, setIndex] = useState(0);
  const fadeAnim = new Animated.Value(0);  // Initial value for opacity

  useEffect(() => {
    // Start the initial fade in
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // Fade out after a delay
      Animated.sequence([
        Animated.delay(1000), // stay visible for 1 sec
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // After fade out, change text and restart the sequence
        setIndex((prevIndex) => (prevIndex + 1) % 3);
        fadeAnim.setValue(0);  // Reset the opacity to 0
      });
    });
  }, [index, fadeAnim]);

  const words = ['Past', 'Present', 'Future'];

  return (
    <View style={styles.container}>
      <Animated.Text style={{...styles.text, opacity: fadeAnim}}>
        {words[index]}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
  },
});

export default ReadingSkeleton;
