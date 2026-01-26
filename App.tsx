import { ActivityIndicator } from 'react-native';
import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import {
	useFonts,
	Montserrat_100Thin,
	Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

export default function App() {
	const [fontsLoaded] = useFonts({
		Montserrat_100Thin,
		Montserrat_900Black,
	});
	if (!fontsLoaded) {
		return (
			<ActivityIndicator
				size='large'
				style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
			/>
		);
	}
	return <RootNavigator />;
}
