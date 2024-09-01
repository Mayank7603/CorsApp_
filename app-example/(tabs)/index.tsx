import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
const user = require('../../assets/images/user.png');
const pic1 = require('../../assets/images/Day_1.png');
const pic2 = require('../../assets/images/Day_2.png');
import { ScrollView } from 'moti';

const index = () => {
	return (
		<ScrollView className="bg-[#1E1E1E] flex w-full h-full ">
			<View className="my-16 mx-8 ">
				<View>
					<View className="flex flex-row gap-20 h-[203px] ">
						<View className="pt-6">
							<Text className="text-3xl font-bold text-white">Hello</Text>
							<Text className="text-xl font-semibold text-gray-400">
								Good Morning !
							</Text>
						</View>
						<View className="h-40 w-[200px]">
							<Image
								source={user}
								resizeMethod="contain"
							/>
						</View>
					</View>
					<View className="flex flex-row justify-between">
						<Text className="text-white text-xl font-semibold">
							Today's Workout Plan
						</Text>
						<Text className="text-[#FFB84E] text-md pt-2 font-bold">
							1 Sep 2024
						</Text>
					</View>
					<Image
						source={pic1}
						style={styles.workoutImage}
						resizeMode="cover" // Fills the Image within the specified dimensions
					/>
					<View className="flex flex-row justify-between py-4">
						<Text className="text-white text-xl font-semibold">
							Workout Categories
						</Text>
						<Text className="text-[#FFB84E] text-md pt-2 font-bold">
							See All
						</Text>
					</View>

					<View className="flex gap-4 flex-row ">
						<View className="bg-[#FFB84E] px-3 py-1 rounded-full ">
							<Text className="text-md font-semibold">Beginner</Text>
						</View>
						<View className="bg-black px-3 py-1 rounded-full ">
							<Text className="text-md font-semibold text-white">
								Intermediate
							</Text>
						</View>
						<View className="bg-black px-3 py-1 rounded-full ">
							<Text className="text-md font-semibold text-white">Advance</Text>
						</View>
					</View>
					<Image
						source={pic2}
						style={styles.workoutImage}
						resizeMode="cover" // Fills the Image within the specified dimensions
					/>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	workoutImage: {
		height: 200,
		width: '100%',
		borderRadius: 10,
		marginTop: 20,
	},
	categoryContainer: {
		backgroundColor: '#FFB84E',
		padding: 10,
		borderRadius: 5,
		marginTop: 15,
	},
	categoryText: {
		color: '#1E1E1E',
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export default index;
