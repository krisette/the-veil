import { useEffect, useState, useCallback } from 'react';
import {
	GoogleSignin,
	statusCodes,
} from '@react-native-google-signin/google-signin';
import { auth } from '../config/firebaseConfig';
import { User, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

GoogleSignin.configure({
	scopes: ['email', 'profile'],
	webClientId:
    '41402172950-0lksne8nntksni0a9k7t2mruh1iukaup.apps.googleusercontent.com',
	iosClientId:
    '41402172950-mlcqkjaqd5mia1ag1lon0jj21dm293ea.apps.googleusercontent.com',
	offlineAccess: false,
});

export const useGoogleSignIn = () => {
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState<string | null>(null);

	const signIn = useCallback(async () => {
		try {
			await GoogleSignin.hasPlayServices();
			const userInfo = await GoogleSignin.signIn();

			const googleCredential = GoogleAuthProvider.credential(userInfo.idToken);
			const firebaseUser = await signInWithCredential(auth, googleCredential);
			setUser(firebaseUser.user);
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				setError('User cancelled the login flow');
			} else {
				setError(error.message);
			}
		}
	}, []);

	const signOut = useCallback(async () => {
		try {
			await GoogleSignin.revokeAccess();
			await GoogleSignin.signOut();
			await auth().signOut();
			setUser(null);
		} catch (error) {
			setError(error.message);
		}
	}, []);

	useEffect(() => {
		if (error) {
			console.error(error);
		}
	}, [error]);

	return { user, signIn, signOut };
};
