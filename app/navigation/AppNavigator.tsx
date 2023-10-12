import React from 'react';
import { Home, Login, History } from '../screens';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import colors from '../../colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppTabs = () => {
  const scheme = useColorScheme(); // 'dark' or 'light'

  const isDarkMode = scheme === 'dark';

  const tabBarBackgroundColor = isDarkMode
    ? colors.backgroundDark
    : colors.background;
  const tabBarTintColor = isDarkMode ? '#fff' : '#000';
  const tabBarBorderColor = isDarkMode ? '#73737F' : '#dcdcdc';

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tabBarTintColor,
        tabBarStyle: {
          backgroundColor: tabBarBackgroundColor,
          borderTopWidth: 1,
          borderTopColor: tabBarBorderColor,
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
};

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
