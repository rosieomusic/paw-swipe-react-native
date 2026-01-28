import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import AnimalCard from '@/components/AnimalCard';
import { getAnimals } from '@/api/animals';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@/navigation/AppNavigator';
import { colors } from '../styles/theme';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
	const [animals, setAnimals] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const swiperRef = useRef<Swiper<any>>(null);

	useEffect(() => {
		loadAnimals();
	}, []);

	const loadAnimals = async () => {
		try {
			const data = await getAnimals();
			setAnimals(data);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};
	if (loading) {
		return <ActivityIndicator style={{ flex: 1 }} />;
	}

	return (
		<View style={styles.home}>
			<Header />
			<View style={styles.container}>
				<Swiper
					containerStyle={{ backgroundColor: 'transparent' }}
					ref={swiperRef}
					cards={animals}
					renderCard={(animal) => {
						if (!animal) return null;
						return <AnimalCard animal={animal} />;
					}}
					onTapCard={(index) => {
						const animal = animals[index];

						if (!animal) {
							console.warn('Tapped card but animal was undefined');
							return;
						}

						console.log('Tapped animal:', animal.animalId);

						navigation.navigate('AnimalDetails', {
							animalId: animal.animalId,
						});
					}}
					stackSize={3}
					cardStyle={{ backgroundColor: 'transparent' }}
				/>
			</View>
			<View>
				<Text style={styles.text}>
					Swipe right to add animal to favorites. {'\n'}Swipe left to skip.{' '}
					{'\n'} Click on image for more details
				</Text>
			</View>

			<Footer />
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		zIndex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'center',
	},
	home: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		textAlign: 'center',
		marginBottom: 30,
	},
});
