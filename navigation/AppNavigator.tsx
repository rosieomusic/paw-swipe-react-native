import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import AnimalDetailsScreen from '@/screens/AnimalDetailsScreen';

export type AppStackParamList = {
	Home: undefined;
	AnimalDetails: { animalId: number };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='Home'
				component={HomeScreen}
			/>
			<Stack.Screen
				name='AnimalDetails'
				component={AnimalDetailsScreen}
			/>
		</Stack.Navigator>
	);
}
