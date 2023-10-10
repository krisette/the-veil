import React from 'react';
import { View } from 'react-native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

interface Props {
  signIn: () => void;
}

const SignIn: React.FC<Props> = ({ signIn }) => {
	return (
		<View className="bg-background h-full">
			<GoogleSigninButton
				size={GoogleSigninButton.Size.Wide}
				color={GoogleSigninButton.Color.Light}
				onPress={signIn}
			/>
		</View>
	);
};

export default SignIn;
