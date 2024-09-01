import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const Exercise = ({ name, image, reps }) => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.nameText}>{name}</Text>
				<Text style={styles.repsText}>Reps - {reps}</Text>
			</View>
			<Image
				source={image}
				style={styles.image}
			/>
		</View>
	);
};

export default Exercise;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFB84E',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 16, // equivalent to p-4
		borderRadius: 16, // equivalent to rounded-xl
		marginVertical: 4,
	},
	nameText: {
		fontSize: 24, // equivalent to text-2xl
		fontWeight: 'bold',
	},
	repsText: {
		fontSize: 20, // equivalent to text-xl
		fontWeight: '600', // equivalent to font-semibold
		color: '#4B5563', // equivalent to text-gray-800
	},
	image: {
		width: 50, // You can adjust the width and height as needed
		height: 50, // This depends on the actual size you want for the image
		resizeMode: 'contain', // This helps keep the aspect ratio of the image intact
	},
});
