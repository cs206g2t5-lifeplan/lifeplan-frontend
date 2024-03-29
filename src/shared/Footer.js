import React, { useState } from 'react';
import { Image, LogBox } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../../assets/account.png';
import Home from '../../assets/home.png';
import Care from '../../assets/care.png';
import Emergency from '../../assets/emergency.png';
import AccountScreen from '../home/AccountScreen';
import EmergencyScreen from '../home/EmergencyScreen';
import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();

const Footer = () => {
	LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
	LogBox.ignoreAllLogs(); //Ignore all log notifications
	const [shown, setShown] = useState(true);

	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#60435F"
			inactiveColor="#3e2465"
			screenOptions={{
				tabBarStyle: {
					paddingBottom: 10,
					paddingTop: 10,
					height: 80,
					elevation: 1,
					zIndex: 1,
					display: shown ? 'flex' : 'none',
					borderTopEndRadius: 30,
					borderTopLeftRadius: 30,
				},
			}}
		>
			<Tab.Screen
				name="Care Mode"
				component={() => null}
				listeners={() => ({
					tabPress: (e) => {
						e.preventDefault(); // Prevents navigation
						// Your code here for when you press the tab
					},
				})}
				options={{
					tabBarIcon: ({ color, size }) => {
						return (
							<Image
								source={Care}
								className="mb-4"
								style={{ width: 80, height: 80 }}
							/>
						);
					},
				}}
			/>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image source={Home} style={{ width: 35, height: 30 }} />
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Safe Return"
				component={EmergencyScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image source={Emergency} style={{ width: 36, height: 28 }} />
					),
				}}
			/>
			<Tab.Screen
				name="Account"
				component={AccountScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image source={Account} style={{ width: 30, height: 34 }} />
					),
					headerShown: false,
				}}
			/>
		</Tab.Navigator>
	);
};

export default Footer;
