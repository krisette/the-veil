import React from 'react';
import { Button, View } from 'react-native';

interface Props {
  signIn: () => void;
}

const SignIn: React.FC<Props> = ({ signIn }) => {
	return (
		<View>
			<Button title="Sign in with Google" onPress={signIn} />
		</View>
	);
};

export default SignIn;
