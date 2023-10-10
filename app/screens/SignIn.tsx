import React from 'react';
import { Button, Text, View } from 'react-native';
import { useGoogleSignIn } from '../hooks/auth';

const SignIn: React.FC = () => {
	const { user, signIn } = useGoogleSignIn();

	return (
		<View>
			<Button title="Sign in with Google" onPress={signIn} />
			{user && <Text>Welcome, {user.displayName}!</Text>}
		</View>
	);
};

export default SignIn;
