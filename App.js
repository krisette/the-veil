/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
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

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AuthProvider>
          <SafeAreaView className="bg-background">
            <QueryClientProvider client={queryClient}>
              <StatusBar backgroundColor="#1C1C1C" style="light" />
              <AppNavigator />
            </QueryClientProvider>
          </SafeAreaView>
        </AuthProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
