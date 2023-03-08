import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AddActivityScreen = ({ navigation }) => {
	return (
		<View className="w-screen h-screen">
			<View className="w-screen h-screen bg-white">
				<Text className="font-bold text-2xl text-center mt-4">
					Add Activity
				</Text>
			</View>
		</View>
	);
};

export default AddActivityScreen;
