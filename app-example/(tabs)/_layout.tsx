import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Dashboard',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'home' : 'home-outline'} // Example: home icon
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Friends"
				options={{
					title: 'Friends',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'people' : 'people-outline'} // Example: people icon
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Workout"
				options={{
					title: 'Workout',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'fitness' : 'fitness-outline'} // Example: fitness or workout icon
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="Rewards"
				options={{
					title: 'Rewards',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'trophy' : 'trophy-outline'} // Example: trophy or rewards icon
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
