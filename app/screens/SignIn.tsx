// SignIn.tsx
import React, { useEffect } from 'react';
import { Button, Text, View, Alert } from 'react-native';
import { useGoogleSignIn } from '../hooks/auth';

const SignIn: React.FC = () => {
	const { user, request, response, promptAsync } = useGoogleSignIn();

	useEffect(() => {
		if (response?.type === 'error') {
			Alert.alert('Google Sign-In Error', response.error?.message);
		}
	}, [response]);

	const handleSignIn = async () => {
		try {
			await promptAsync();
		} catch (error) {
			Alert.alert('An error occurred', 'Could not start sign-in process.');
		}
	};

	return (
		<View>
			<Button
				title="Sign in with Google"
				onPress={handleSignIn}
				disabled={!request}
			/>
			{user && <Text>Welcome, {user.displayName}!</Text>}
		</View>
	);
};

export default SignIn;
