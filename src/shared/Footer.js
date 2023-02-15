import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
import SignInScreen from '../auth/SignInScreen';
import Account from '../../assets/account.png';
import Home from '../../assets/home.png';
import Messages from '../../assets/message.png';
import AccountScreen from '../home/AccountScreen';
import MessagesScreen from '../home/MessagesScreen';

const Tab = createBottomTabNavigator();

const Footer = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Account"
				component={AccountScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image size={size} source={Account} />
					),
				}}
			/>
			<Tab.Screen
				name="Homepage"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => <Image size={size} source={Home} />,
				}}
			/>
			<Tab.Screen
				name="Messages"
				component={MessagesScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Image size={size} source={Messages} />
					),
				}}
			/>
			<Tab.View name="Care Mode" />
		</Tab.Navigator>
	);
};

export default Footer;
