import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { FilledButton } from '../../ui/buttons';
import { Title } from '../../ui/text';
import { useNavigation } from '@react-navigation/native';
import { useGoogleSignIn } from '../hooks/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

const Login: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Login'>>();
  const { signIn } = useGoogleSignIn();

  const handleSignIn = async () => {
    try {
      await signIn();
      navigation.navigate('AppTabs');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return (
    <SafeAreaView className="bg-background h-full items-center justify-center">
      <View className="flex-1 justify-center items-center">
        <Title className="text-[64px] text-primary lowercase">The Veil</Title>
        <Title className="text-2xl text-default lowercase">
          Modern Mystics Welcome
        </Title>
      </View>
      <FilledButton
        onPress={handleSignIn}
        iconLeft="google"
        size="large"
        className="mb-12"
      >
        Sign in with Google
      </FilledButton>
    </SafeAreaView>
  );
};

export default Login;
