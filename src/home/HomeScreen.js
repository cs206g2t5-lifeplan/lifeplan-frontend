import { View, Text, TextInput, Button } from 'react-native';

export default function HomeScreen() {
	return (
		<View className="w-screen h-screen bg-white" style={{ minHeight: 100 }}>
			<View className="h-10" />
			<Text className="pl-4 text-3xl font-bold" style={{ color: '#60435F' }}>
				Welcome
			</Text>
		</View>
	);
}
