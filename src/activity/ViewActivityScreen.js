import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ViewActivityScreen = ({ navigation }) => {
	return (
		<View className="w-screen h-full">
			<View className="w-screen h-1/3 bg-white">
				<Text className="font-bold text-2xl text-center mt-4">
					Add Activity
				</Text>
			</View>
		</View>
	);
};

export default ViewActivityScreen;
