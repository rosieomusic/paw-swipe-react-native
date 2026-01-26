import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../styles/theme';

export default function Footer() {
	// Open links in browser
	const handleLink = (url: string) => {
		Linking.openURL(url).catch((err) =>
			console.error('Failed to open URL', err),
		);
	};

	return (
		<View style={styles.footer}>
			{/* ICONS ROW */}
			<View style={styles.icons}>
				<TouchableOpacity
					onPress={() => handleLink('http://www.instagram.com/pugdashians')}
				>
					<FontAwesome5
						name='instagram-square'
						size={32}
						color='black'
						style={styles.icon}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						handleLink('https://www.facebook.com/PhilaAnimalWelfareSociety/')
					}
				>
					<FontAwesome5
						name='facebook-square'
						size={32}
						color='black'
						style={styles.icon}
					/>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() =>
						handleLink('https://www.youtube.com/watch?v=CdX4VYd5VXk')
					}
				>
					<FontAwesome5
						name='youtube-square'
						size={32}
						color='black'
						style={styles.icon}
					/>
				</TouchableOpacity>

				{/* Paw icon (internal navigation) */}
				<TouchableOpacity onPress={() => console.log('Navigate to home')}>
					<FontAwesome5
						name='paw'
						size={32}
						color='black'
						style={styles.icon}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	footer: {
		backgroundColor: colors.footer,
		width: '100%',
		paddingHorizontal: 20,
		paddingVertical: 10,
		alignItems: 'center',
	},
	icons: {
		flexDirection: 'row',
		gap: 20,
		marginBottom: 15,
		justifyContent: 'space-between',
	},
	icon: {
		marginRight: 20,
		marginLeft: 20,
	},
	copy: {
		fontSize: 12,
		textAlign: 'center',
		color: 'black',
	},
});
