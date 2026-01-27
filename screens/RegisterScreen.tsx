import React, { useState } from 'react';
import { register } from '@/api/auth';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { globalStyles } from '@/styles/globalStyles';
import { typography } from '@/styles/theme';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/AuthNavigator';

type Props = NativeStackScreenProps<AuthStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: Props) {
	const [username, setUsername] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [role] = useState('USER');

	const handleRegister = async () => {
		setError(null);

		if (!username || !password || !confirmPassword || !email || !firstName) {
			setError('All fields are required except for last name');
			return;
		}

		if (password !== confirmPassword) {
			setError('Passwords do not match');
			return;
		}

		try {
			setLoading(true);

			await register({
				username,
				password,
				confirmPassword,
				firstName,
				email,
				role: 'USER',
				lastName: lastName || undefined,
			});

			console.log('Register Success');
		} catch (err: any) {
			console.error('Register Error', err);

			setError(
				err?.response?.data?.message || 'Unable to register. Pleast try again.',
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.area}>
			<Header />
			<View style={styles.formContainer}>
				<Text style={typography.heading}>Create Account</Text>

				<TextInput
					placeholder='Username'
					value={username}
					onChangeText={setUsername}
					style={globalStyles.input}
					placeholderTextColor='#888'
					autoCapitalize='none'
				/>
				<TextInput
					placeholder='First Name'
					value={firstName}
					onChangeText={setFirstName}
					style={globalStyles.input}
					placeholderTextColor='#888'
					autoCapitalize='none'
				/>
				<TextInput
					placeholder='Last Name'
					value={lastName}
					onChangeText={setLastName}
					style={globalStyles.input}
					placeholderTextColor='#888'
					autoCapitalize='none'
				/>

				<TextInput
					placeholder='Email'
					value={email}
					onChangeText={setEmail}
					style={globalStyles.input}
					placeholderTextColor='#888'
					keyboardType='email-address'
					autoCapitalize='none'
				/>

				<TextInput
					placeholder='Password'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
					style={globalStyles.input}
					placeholderTextColor='#888'
				/>

				<TextInput
					placeholder='Confirm Password'
					value={confirmPassword}
					onChangeText={setConfirmPassword}
					secureTextEntry
					style={globalStyles.input}
					placeholderTextColor='#888'
				/>
				<View style={styles.buttonContainer}>
					<TouchableOpacity
						style={globalStyles.button}
						onPress={handleRegister}
						disabled={loading}
					>
						<Text style={globalStyles.buttonText}>
							{' '}
							{loading ? 'Creating Account...' : 'Register'}
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={globalStyles.button}
						onPress={() => navigation.navigate('Login')}
						disabled={loading}
					>
						<Text style={globalStyles.buttonText}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
			<Footer />
		</View>
	);
}

const styles = StyleSheet.create({
	formContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#DECEC1',
		alignItems: 'center',
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
	buttonContainer: {
		marginTop: 40,
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 10,
	},
	buttonText: {
		color: 'white',
	},
	errorText: {
		color: 'red',
		marginBottom: 12,
		textAlign: 'center',
	},
	area: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#DECEC1',
		padding: 0,
		margin: 0,
	},
});
