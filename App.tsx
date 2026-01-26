import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

export default function App() {
	return (
		<View style={styles.container}>
			<Text> Hello from React Native 👋</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
