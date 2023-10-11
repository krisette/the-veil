/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './app/navigation/AppNavigator';
import { AuthProvider } from './app/context/auth';
import {
  useFonts,
  Inconsolata_200ExtraLight,
  Inconsolata_300Light,
  Inconsolata_400Regular,
  Inconsolata_500Medium,
  Inconsolata_600SemiBold,
  Inconsolata_700Bold,
  Inconsolata_800ExtraBold,
  Inconsolata_900Black,
} from '@expo-google-fonts/inconsolata';
import {
  Spectral_200ExtraLight,
  Spectral_200ExtraLight_Italic,
  Spectral_300Light,
  Spectral_300Light_Italic,
  Spectral_400Regular,
  Spectral_400Regular_Italic,
  Spectral_500Medium,
  Spectral_500Medium_Italic,
  Spectral_600SemiBold,
  Spectral_600SemiBold_Italic,
  Spectral_700Bold,
  Spectral_700Bold_Italic,
  Spectral_800ExtraBold,
  Spectral_800ExtraBold_Italic,
} from '@expo-google-fonts/spectral';
import {
  LibreBaskerville_400Regular,
  LibreBaskerville_400Regular_Italic,
  LibreBaskerville_700Bold,
} from '@expo-google-fonts/libre-baskerville';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useGoogleSignIn } from './app/hooks/auth';
import SignIn from './app/screens/SignIn';

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    Inconsolata_200ExtraLight,
    Inconsolata_300Light,
    Inconsolata_400Regular,
    Inconsolata_500Medium,
    Inconsolata_600SemiBold,
    Inconsolata_700Bold,
    Inconsolata_800ExtraBold,
    Inconsolata_900Black,
    Spectral_200ExtraLight,
    Spectral_200ExtraLight_Italic,
    Spectral_300Light,
    Spectral_300Light_Italic,
    Spectral_400Regular,
    Spectral_400Regular_Italic,
    Spectral_500Medium,
    Spectral_500Medium_Italic,
    Spectral_600SemiBold,
    Spectral_600SemiBold_Italic,
    Spectral_700Bold,
    Spectral_700Bold_Italic,
    Spectral_800ExtraBold,
    Spectral_800ExtraBold_Italic,
    LibreBaskerville_400Regular,
    LibreBaskerville_400Regular_Italic,
    LibreBaskerville_700Bold,
  });

  if (!fontsLoaded) return null;

  console.log('App Component is rendering');

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <StatusBar style="light" />
            <AppNavigator />
            {/* <SignIn /> */}
          </QueryClientProvider>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
