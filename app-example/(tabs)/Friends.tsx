import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	TextInput,
} from 'react-native';
import React from 'react';
import ColUser from '@/components/ColUser';

const Friends = () => {
	return (
		<ScrollView className="bg-[#313131] flex w-full h-full ">
			<View className="my-20 mx-8">
				<Text className="text-3xl text-white font-bold mb-8">Your Friends</Text>
				<ScrollView
					className="h-[400px]  border-2 border-[#FFB84E] rounded-3xl p-4 bg-[#474646]"
					persistentScrollbar={true}>
					<ColUser />
					<ColUser />
					<ColUser />
					<ColUser />
					<ColUser />
					<ColUser />
					<ColUser />
					<ColUser />
				</ScrollView>

				<Text className="text-white text-2xl font-bold mt-6 text-center">
					Add a new Friend +
				</Text>
				<Text className="text-gray-300 text-center mt-1 text-[15px]">
					Enter your friends email ID here.
				</Text>
				<TextInput
					placeholder="for ex: abc@gmail.com"
					placeholderTextColor="#999"
					className=" text-white py-3 px-3 rounded-full mt-3 border-2 border-[#FFB84E]"
				/>
				<View className="bg-[#FFB84E] px-3 py-1 rounded-full w-32 items-center justify-center mt-3 ml-24 ">
					<Text className="text-xl font-semibold">Request</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default Friends;

const styles = StyleSheet.create({});
