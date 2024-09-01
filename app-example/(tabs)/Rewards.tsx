import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TextInput,
} from 'react-native';
import React from 'react';
const price = require('../../assets/images/price.png');
import OfferCard from '@/components/OfferCard';

const Rewards = () => {
	return (
		<ScrollView className="bg-[#313131] flex w-full h-full ">
			<View className="my-20 mx-8">
				<View className="flex flex-row gap-28 mb-8">
					<Text className="text-3xl text-white font-bold ">Rewards</Text>
					<View className="bg-[#FFB84E] w-24 rounded-full flex flex-row">
						<Image source={price} />
						<Text className="font-bold text-xl pt-0.5 pl-2">199</Text>
					</View>
				</View>
				<OfferCard
					desc="Offer Details"
					img={price}
					coin="199"
				/>
				<OfferCard
					desc="Offer Details"
					img={price}
					coin="199"
				/>
				<OfferCard
					desc="Offer Details"
					img={price}
					coin="199"
				/>
			</View>
		</ScrollView>
	);
};

export default Rewards;

const styles = StyleSheet.create({});
