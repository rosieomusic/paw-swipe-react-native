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
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/AuthNavigator';
import { useAuth } from '@/context/AuthContext';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { login: setAuth } = useAuth();

	const handleLogin = async () => {
		try {
			await login(username, password);
			setAuth();
		} catch (err) {
			console.error('LOGIN ERROR:', err);
		}
	};
	return (
		<View style={styles.area}>
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
				<View style={globalStyles.buttonContainer}>
					<TouchableOpacity
						style={globalStyles.button}
						onPress={handleLogin}
					>
						<Text style={globalStyles.buttonText}>Sign In</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={globalStyles.button}
						onPress={() => navigation.navigate('Register')}
					>
						<Text style={globalStyles.buttonText}>Register</Text>
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
		alignSelf: 'center',
		backgroundColor: '#A9B5CC',
		width: '90%',
		marginTop: 40,
		marginBottom: 40,
		padding: 20,
		borderRadius: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 4,
		elevation: 5,
	},
	area: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#DECEC1',
	},
});
