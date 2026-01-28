import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function AnimalCard({ animal }: any) {
	return (
		<View>
			<View style={styles.card}>
				<Image
					source={{ uri: animal.imageUrl }}
					style={styles.image}
				/>
				<View style={styles.info}>
					<Text style={styles.name}>{animal.animalName}</Text>
					<Text>{animal.breed}</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		borderRadius: 20,
		backgroundColor: '#fff',
		height: '75%',
		shadowColor: '#000',
		shadowOpacity: 0.2,
		shadowRadius: 10,
		elevation: 5,
	},
	image: {
		width: '100%',
		height: '75%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
	},
	info: {
		padding: 16,
	},
	name: {
		fontSize: 22,
		fontWeight: '700',
	},
});
