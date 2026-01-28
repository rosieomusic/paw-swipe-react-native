import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getAnimalById } from '@/api/animals';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { globalStyles } from '@/styles/globalStyles';

export default function AnimalDetailsScreen({ route, navigation }: any) {
	const { animalId } = route.params;

	const [animal, setAnimal] = useState<any>(null);

	useEffect(() => {
		getAnimalById(animalId).then(setAnimal);
	}, [animalId]);

	if (!animal) return null;

	return (
		<View style={styles.details}>
			<Header />
			<View style={styles.container}>
				<Image
					source={{ uri: animal.imageUrl }}
					style={styles.image}
				/>
				<View style={styles.content}>
					<Text style={styles.name}>{animal.animalName}</Text>
					<Text>{animal.description}</Text>
					<Text>Breed: {animal.breed}</Text>
					<Text>Gender: {animal.gender}</Text>
					<Text>Age: {animal.age} </Text>
					<Text>Size: {animal.size} </Text>
				</View>
				<View style={globalStyles.buttonContainer}>
					<TouchableOpacity
						style={globalStyles.button}
						onPress={() => navigation.goBack()}
					>
						<Text style={globalStyles.buttonText}>Back</Text>
					</TouchableOpacity>
				</View>
			</View>

			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	image: { margin: 0, padding: 0, width: '100%', height: 300 },
	content: { padding: 25 },
	name: { fontSize: 28, fontWeight: '800' },
	details: {
		flex: 1,
		backgroundColor: '#DECEC1',
	},
});
