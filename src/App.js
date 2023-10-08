import { StatusBar } from 'expo-status-bar';
import HomePage from './screens/HomePage';
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
  });

  if (!fontsLoaded)
    return null;

  return (
    <>
      <StatusBar style="auto" />
      <HomePage />
    </>
  );
}
