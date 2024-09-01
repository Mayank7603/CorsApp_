import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import male from '@/assets/images/male.png';
import female from '@/assets/images/female.png';

const index = () => {
	const handleNext = () => {
		router.push('/weight');
	};
	const handleBack = () => {
		router.push('/');
	};
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Tell Us About Yourself</Text>

				<Text style={styles.description}>
					To give you a better experience by knowing your gender{' '}
				</Text>
			</View>

			<View style={styles.imageContainer}>
				<Image
					source={male}
					style={styles.image}
				/>
				<Image
					source={female}
					style={styles.image}
				/>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.button}
					onPress={handleBack}>
					<Text style={styles.buttonText}>Go back</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={handleNext}>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#1E1E1E',
		paddingVertical: 90,
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
		color: '#fff',
	},
	description: {
		fontSize: 20,
		color: '#999',
		textAlign: 'center',
		marginBottom: 20,
		paddingHorizontal: 20,
	},
	imageContainer: {
		flexDirection: 'col',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%', // Reduced width to decrease space between images
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 10,
		marginHorizontal: -10, // Added negative margin to reduce space between images
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		width: '100%',
	},
	button: {
		backgroundColor: '#FFB84E',
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderRadius: 5,
		alignItems: 'center',
		marginHorizontal: 5,
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
	},
	circle: {
		width: 100,
		height: 100,
		backgroundColor: '#3498db',
		borderRadius: 50,
		marginVertical: 20,
	},
});

export default index;
