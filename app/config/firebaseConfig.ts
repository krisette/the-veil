import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: 'AIzaSyCn6Lhp7nBf_fgOj9f3XssypvnAqGY5omE',
  authDomain: 'the-veil-254da.firebaseapp.com',
  projectId: 'the-veil-254da',
  storageBucket: 'the-veil-254da.appspot.com',
  messagingSenderId: '41402172950',
  appId: '1:41402172950:web:50bd0332159ef1a2955737',
  measurementId: 'G-KP21W9KNJX',
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };
