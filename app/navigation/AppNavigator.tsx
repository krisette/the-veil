import React from 'react';
import { Home, Login, History } from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#1c1c1c',
        borderTopWidth: 1,
        borderTopColor: '#73737F',
        elevation: 0,
      },
      tabBarLabelStyle: {
        fontFamily: 'Inconsolata_400Regular',
        fontSize: 20,
        textTransform: 'uppercase',
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{ tabBarLabel: 'Home', tabBarIcon: () => null }}
    />
    <Tab.Screen
      name="History"
      component={History}
      options={{ tabBarLabel: 'History', tabBarIcon: () => null }}
    />
  </Tab.Navigator>
);

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          contentStyle: {
            backgroundColor: 'transparent',
          },
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      />
      <Stack.Screen
        name="AppTabs"
        component={AppTabs}
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
};

export default AppNavigator;
