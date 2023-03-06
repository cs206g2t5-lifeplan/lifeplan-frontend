import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import SignInScreen from '../auth/SignInScreen';
import Account from '../../assets/account.png';
import Home from '../../assets/home.png';
import Care from '../../assets/care.png';
import Emergency from '../../assets/emergency.png';
import AccountScreen from '../home/AccountScreen';
import MessagesScreen from '../home/MessagesScreen';

const Tab = createBottomTabNavigator();

const Footer = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			activeColor="#60435F"
			inactiveColor="#3e2465"
			screenOptions={{
				tabBarStyle: {
					borderRadius: 30,
					paddingBottom: 10,
					paddingTop: 10,
					height: 80,
				},
				tabBarActiveTintColor: '#60435F',
			}}
		>
			<Tab.Screen
				name="Care Mode"
				component={SignInScreen}
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
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image source={Home} style={{ width: 35, height: 30 }} />
					),
					headerShown: false,
				}}
			/>
			<Tab.Screen
				name="Emergency"
				component={MessagesScreen}
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
				}}
			/>
		</Tab.Navigator>
	);
};

export default Footer;
