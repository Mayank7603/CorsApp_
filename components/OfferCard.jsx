import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
const price = require('../assets/images/price.png');

const OfferCard = ({ img, coin, desc }) => {
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<Image source={img} />
				<View style={styles.priceContainer}>
					<Image source={price} />
					<Text style={styles.priceText}>{coin}</Text>
				</View>
			</View>
			<Text style={styles.offerDetails}>{desc}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFB84E',
		width: '100%',
		height: 128, // h-32 = 32 * 4 = 128
		borderRadius: 20, // rounded-xl
		padding: 16, // p-4
		marginVertical: 10,
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	priceContainer: {
		backgroundColor: '#FFB84E',
		width: 96, // w-24 = 24 * 4 = 96
		borderRadius: 50, // rounded-full
		flexDirection: 'row',
		alignItems: 'center',
	},
	priceText: {
		fontWeight: 'bold',
		fontSize: 20, // text-xl
		paddingTop: 2, // pt-0.5
		paddingLeft: 8, // pl-2
	},
	offerDetails: {
		fontSize: 16, // text-[16px]
		marginTop: 8, // mt-2
	},
});

export default OfferCard;
