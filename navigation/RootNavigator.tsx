import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import React from 'react';

export default function RootNavigator() {
	return (
		<NavigationContainer>
			<AuthNavigator />
		</NavigationContainer>
	);
}
