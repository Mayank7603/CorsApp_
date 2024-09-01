import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const user = require('../assets/images/user_1.png');
const del = require('../assets/images/delete.png');

const ColUser = () => {
	return (
		<View style={styles.container}>
			<View style={styles.contentContainer}>
				<Image
					source={user}
					style={styles.userImage}
				/>
				<Text style={styles.userName}>Friend 1</Text>
				<Image
					source={del}
					style={styles.deleteImage}
				/>
			</View>
			<View style={styles.separator} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16, // Tailwind `gap-4` translates to 16px, adjust if needed
	},
	userImage: {
		width: 40, // Adjust size based on image requirements
		height: 40, // Adjust size based on image requirements
	},
	userName: {
		color: 'white',
		fontSize: 18, // Tailwind `text-xl` translates to 18px
		paddingRight: 80, // Tailwind `pr-20` translates to 40px
	},
	deleteImage: {
		width: 24, // Adjust size based on image requirements
		height: 24, // Adjust size based on image requirements
	},
	separator: {
		height: 1,
		backgroundColor: '#FFB84E', // Light grey color for the horizontal line
		marginVertical: 10, // Margin to add space above and below the line
		marginRight: 40,
	},
});

export default ColUser;
