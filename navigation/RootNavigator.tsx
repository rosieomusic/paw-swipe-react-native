import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { useAuth } from '@/context/AuthContext';

export default function RootNavigator() {
	const { isAuthenticated } = useAuth();
	console.log('AUTH STATE:', isAuthenticated);

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
}
