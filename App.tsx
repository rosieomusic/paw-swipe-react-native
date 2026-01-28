import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import RootNavigator from './navigation/RootNavigator';
import {
	useFonts,
	Montserrat_100Thin,
	Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import { AuthProvider } from './context/AuthContext';

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_100Thin,
		Montserrat_900Black,
	});

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
				<ActivityIndicator size='large' />
			</View>
		);
	}

	return (
		<AuthProvider>
			<RootNavigator />
		</AuthProvider>
	);
}
