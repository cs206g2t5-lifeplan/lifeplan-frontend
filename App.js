import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './dist/output.css'; // Add this for web support ONLY

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-black">
			<Text className="text-white">Hello World!</Text>
			<Text className="text-white">Nice to meet you!</Text>
			<StatusBar style="auto" />
		</View>
	);
}
