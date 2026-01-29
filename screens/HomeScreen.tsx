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
import FilterBar from '@/components/FilterBar';
import { Animal } from '@/types/Animal';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
	const [animals, setAnimals] = useState<Animal[]>([]);
	const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);
	const [loading, setLoading] = useState(true);
	const [type, setType] = useState<'DOG' | 'CAT' | null>(null);
	const [search, setSearch] = useState('');
	const [cardIndex, setCardIndex] = useState(0);
	const swiperRef = useRef<Swiper<Animal>>(null);

	const loadAnimals = async (): Promise<void> => {
		try {
			const data: Animal[] = await getAnimals();
			setAnimals(data);
		} catch (e) {
			console.error(e);
		} finally {
			setLoading(false);
		}
	};

	const applyFilters = (): void => {
		let result = animals;

		if (type) {
			result = result.filter((a) => a.type?.toUpperCase() === type);
		}

		if (search) {
			result = result.filter((a) =>
				a.breed?.toLowerCase().includes(search.toLowerCase()),
			);
		}

		setFilteredAnimals(result);
	};

	useEffect(() => {
		loadAnimals();
	}, []);

	useEffect(() => {
		applyFilters();
	}, [animals, type, search]);

	useEffect(() => {
		setCardIndex(0);
		swiperRef.current?.jumpToCardIndex(0);
	}, [type, search]);

	if (loading) {
		return <ActivityIndicator style={{ flex: 1 }} />;
	}

	return (
		<View style={styles.home}>
			<Header />

			<View style={styles.filterBar}>
				<FilterBar
					search={search}
					onSearchChange={setSearch}
					type={type}
					onTypeChange={setType}
				/>
			</View>

			<View style={styles.container}>
				<Swiper<Animal>
					ref={swiperRef}
					cards={filteredAnimals}
					cardIndex={cardIndex}
					renderCard={(animal) =>
						animal ? <AnimalCard animal={animal} /> : null
					}
					onTapCard={(index) => {
						const animal = filteredAnimals[index];
						if (!animal) {
							console.warn('Tapped card but animal was undefined');
							return;
						}
						console.log('Tapped animal:', animal.animalId, animal.type);
						navigation.navigate('AnimalDetails', { animalId: animal.animalId });
					}}
					stackSize={3}
					backgroundColor='transparent'
				/>
			</View>
			<Text style={styles.text}>Click on image for more details {'\n'}</Text>

			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		zIndex: 1,
		backgroundColor: 'transparent',
		bottom: 30,
	},
	home: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		textAlign: 'center',
		padding: 0,
		margin: 0,
	},
	filterBar: {
		marginTop: 20,
	},
});
