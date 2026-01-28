import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../styles/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
	return (
		<SafeAreaView edges={['top']}>
			<View style={styles.header}>
				<Image
					source={require('../assets/images/FrankiePainted.png')}
					style={styles.logo}
				/>
				<Text style={styles.text}> Paw Swipe</Text>
				<Image
					source={require('../assets/images/paw.png')}
					style={styles.paw}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.background,
		justifyContent: 'space-between',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%',
		height: 100,
		backgroundColor: colors.header,
		padding: 0,
		margin: 0,
	},
	text: {
		fontSize: 36,
		fontWeight: '600' as const,
		textAlign: 'center' as const,
		fontFamily: 'Montserrat_900Black',
		color: colors.text,
	},
	logo: {
		height: 60,
		width: 60,
		borderRadius: 40,
		marginRight: 0,
	},
	paw: {
		height: 60,
		width: 50,
		marginLeft: 0,
	},
});
