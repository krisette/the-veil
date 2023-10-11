import React from 'react';
import SignIn from '../screens/SignIn';
import HomePage from '../screens/HomePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={SignIn}
        options={{
          contentStyle: {
            backgroundColor: 'transparent',
          },
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{
          contentStyle: {
            backgroundColor: 'transparent',
          },
          animation: 'fade_from_bottom',
          animationDuration: 1500,
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
