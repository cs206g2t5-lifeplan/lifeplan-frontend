import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddActivityScreen from '../activity/AddActivityScreen';
import RecordActivityScreen from '../activity/RecordActivityScreen';
import ViewActivityScreen from '../activity/ViewActivityScreen';
import HomeScreen from '../home/HomeScreen';
import TipsScreen from '../home/TipsScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator screenOptions={{ presentation: 'transparentModal' }}>
			<Stack.Screen
				name="Home"
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Add Activity"
				component={AddActivityScreen}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="View Activity"
				component={ViewActivityScreen}
				options={{ headerShown: true }}
			/>
			<Stack.Screen
				name="Tips"
				component={TipsScreen}
				options={{
					headerShown: true,
				}}
			/>
			<Stack.Screen
				name="Record Activity"
				component={RecordActivityScreen}
				options={{
					headerShown: false,
				}}
				mode="modal"
			/>
		</Stack.Navigator>
	);
};

export default HomeStack;
