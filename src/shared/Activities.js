import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Activity from './Activity';

const Activities = ({ data }) => {
	return (
		<View className="w-full bg-white">
			<Text className="font-bold text-2xl mt-4 ml-8">{data.title}</Text>
			<FlatList
				className="w-10/12 self-center"
				numColumns="4"
				data={data.icons}
				renderItem={(item, index) => <Activity data={item} key={index} />}
				keyExtractor={(item, index) => index}
			></FlatList>
		</View>
	);
};

export default Activities;
