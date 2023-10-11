import React from 'react';
import { View } from 'react-native';
import { FilledButton } from '../../ui/buttons';
import { Title } from '../../ui/text';
import { useNavigation } from '@react-navigation/native';
import { useGoogleSignIn } from '../hooks/auth';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const { signIn } = useGoogleSignIn();

  const handleSignIn = async () => {
    try {
      await signIn();
      navigation.navigate('HomePage');
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  console.log('SignIn is rendering');

  return (
    <View className="bg-background h-full items-center justify-center">
      <View className="flex-1 justify-center items-center">
        <Title className="text-[64px] text-primary lowercase">The Veil</Title>
        <Title className="text-2xl text-default lowercase">
          Modern Mystics Welcome
        </Title>
      </View>
      <FilledButton onPress={handleSignIn} iconLeft="google" size="large">
        Sign in with Google
      </FilledButton>
    </View>
  );
};

export default SignIn;
