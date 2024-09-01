import { useState } from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
	ImageBackground,
} from 'react-native';
import { MotiView, MotiText } from 'moti';
import { router } from 'expo-router';
import bg from '@/assets/images/intro_1.jpeg';

export default function App() {
	const [isLogin, setIsLogin] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	// Toggle between login and signup
	const toggleForm = () => setIsLogin((prev) => !prev);

	// Handle login action
	const handleLogin = () => {
		router.replace('/gender');
		if (email && password) {
			// Add your login logic here
			Alert.alert('Login Successful', `Welcome back, ${email}!`);
		} else {
			Alert.alert('Error', 'Please enter both email and password.');
		}
	};

	// Handle signup action
	const handleSignup = () => {
		if (email && password && confirmPassword) {
			if (password === confirmPassword) {
				// Add your signup logic here
				Alert.alert('Signup Successful', `Welcome, ${email}!`);
			} else {
				Alert.alert('Error', 'Passwords do not match.');
			}
		} else {
			Alert.alert('Error', 'Please fill in all fields.');
		}
	};

	return (
		<ImageBackground
			source={bg}
			style={styles.image}>
			<View style={styles.overlay}>
				<MotiView
					from={{ opacity: 0, translateY: 50 }}
					animate={{ opacity: 1, translateY: 0 }}
					transition={{ type: 'timing', duration: 500 }}
					style={styles.formContainer}>
					<MotiText
						from={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: 'spring', delay: 300 }}
						style={styles.title}>
						{isLogin ? 'Login' : 'Sign Up'}
					</MotiText>

					<TextInput
						placeholder="Email"
						style={styles.input}
						keyboardType="email-address"
						autoCapitalize="none"
						value={email}
						onChangeText={setEmail}
					/>
					<TextInput
						placeholder="Password"
						style={styles.input}
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
					{!isLogin && (
						<TextInput
							placeholder="Confirm Password"
							style={styles.input}
							secureTextEntry
							value={confirmPassword}
							onChangeText={setConfirmPassword}
						/>
					)}

					<TouchableOpacity
						style={styles.button}
						onPress={isLogin ? handleLogin : handleSignup}>
						<Text style={styles.buttonText}>
							{isLogin ? 'Login' : 'Sign Up'}
						</Text>
					</TouchableOpacity>

					<TouchableOpacity onPress={toggleForm}>
						<Text style={styles.toggleText}>
							{isLogin
								? "Don't have an account? Sign Up"
								: 'Already have an account? Login'}
						</Text>
					</TouchableOpacity>
				</MotiView>
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	image: {
		flex: 1,
		resizeMode: 'cover',
		transform: [{ scale: 1.03 }],
		// justifyContent: "flex-end",
	},
	overlay: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 30,
	},
	formContainer: {
		width: '80%',
		padding: 20,
		borderRadius: 10,
		backgroundColor: 'rgba(255, 255, 255, 0.9)',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 20,
	},
	input: {
		width: '100%',
		padding: 10,
		borderWidth: 3,
		borderColor: '#bbb',
		borderRadius: 5,
		marginBottom: 10,
	},
	button: {
		backgroundColor: '#FFB84E',
		padding: 15,
		borderRadius: 5,
		alignItems: 'center',
		marginTop: 10,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	toggleText: {
		marginTop: 15,
		textAlign: 'center',
	},
});
