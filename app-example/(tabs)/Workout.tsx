import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { ScrollView } from 'moti';
import Exercise from '@/components/Exercise';
const price = require('../../assets/images/price.png');

const Workout = () => {
	return (
		<ScrollView className="bg-[#313131] flex w-full h-full ">
			<View className="my-20 mx-8">
				<Text className="text-white text-3xl font-bold">Today's Workout</Text>
				<Text className="text-[#FFB84E] text-xl font-semibold my-4">
					1 Sept. 2024
				</Text>
				<Exercise
					name="biceps"
					image={price}
					reps="12"
				/>
				<Exercise
					name="biceps"
					image={price}
					reps="12"
				/>
				<Exercise
					name="biceps"
					image={price}
					reps="12"
				/>
			</View>
		</ScrollView>
	);
};

export default Workout;

const styles = StyleSheet.create({});
