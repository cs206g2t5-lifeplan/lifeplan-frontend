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
		<Tab.Navigator
			initialRouteName="Homepage"
			activeColor="#f0edf6"
			inactiveColor="#3e2465"
			barStyle={{ paddingBottom: 48 }}
		>
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
			<Tab.Screen name="Care Mode" component={SignInScreen} />
		</Tab.Navigator>
	);
};

export default Footer;
