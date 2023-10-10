// useGoogleSignIn.ts
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import {
	makeRedirectUri,
	useAuthRequest,
	useAutoDiscovery,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { auth } from '../config/firebaseConfig';
import { GoogleAuthProvider, signInWithCredential, User } from 'firebase/auth';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleSignIn = () => {
	const discovery = useAutoDiscovery('https://accounts.google.com');
	const [user, setUser] = useState<User | null>(null);

	const [request, response, promptAsync] = useAuthRequest(
		{
			clientId:
        '41402172950-r5rei71epmu8esb396aui7j6ff6ud3c1.apps.googleusercontent.com',
			redirectUri: makeRedirectUri({
				native: 'theveil://redirect',
			}),
			scopes: ['openid', 'profile', 'email'],
			responseType: 'code',
		},
		discovery,
	);

	useEffect(() => {
		if (response?.type === 'success') {
			const { access_token } = response.params;

			const credential = GoogleAuthProvider.credential(null, access_token);

			signInWithCredential(auth, credential)
				.then((userCredential) => {
					setUser(userCredential.user);
				})
				.catch((error) => {
					Alert.alert('Firebase auth error', error.message);
				});
		}
	}, [response]);

	return { user, request, response, promptAsync };
};
