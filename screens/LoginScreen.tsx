import { login } from '@/api/auth';
import React, { useState } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';
import { globalStyles } from '@/styles/globalStyles';
import { typography } from '@/styles/theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		try {
			const data = await login(username, password);
			console.log('LOGIN SUCCESS:', data);
		} catch (err) {
			console.error('LOGIN ERROR:', err);
		}
	};
	return (
		<SafeAreaView
			style={styles.safeArea}
			edges={[]}
		>
			<Header />
			<View style={styles.formContainer}>
				<Text style={typography.heading}>Login</Text>

				<TextInput
					placeholder='Username'
					value={username}
					onChangeText={setUsername}
					style={globalStyles.input}
					placeholderTextColor={'#585555'}
					autoCapitalize='none'
				/>

				<TextInput
					placeholder='Password'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					style={globalStyles.input}
					placeholderTextColor={'#585555'}
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={styles.button}
						onPress={handleLogin}
					>
						<Text style={styles.buttonText}>Sign In</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Register</Text>
					</TouchableOpacity>
				</View>
			</View>
			<Footer />
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: '#A9B5CC',
		width: '90%',
		marginVertical: 60,
		padding: 20,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
	},
	safeArea: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#DECEC1',
	},
	buttonContainer: {
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
	button: {
		backgroundColor: '#5C6E92',
		padding: 16,
		borderRadius: 20,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
	},
	buttonText: {
		color: 'white',
	},
});
