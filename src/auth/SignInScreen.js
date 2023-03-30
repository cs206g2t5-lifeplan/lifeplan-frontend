import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import ellipseWhite from '../../assets/EllipseWhite.png';
import ellipsePink from '../../assets/EllipsePink.png';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';

const SignInScreen = ({ navigation }) => {
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={{ backgroundColor: '#A8DCD9' }} className="w-screen h-screen">
			<Image
				className="absolute bottom-0 right-0 w-screen"
				source={ellipseWhite}
				resizeMethod="scale"
				resizeMode="stretch"
			/>
			<Image
				className="absolute bottom-0 right-0 w-screen"
				source={ellipsePink}
				resizeMethod="scale"
				resizeMode="stretch"
			/>
			<View className="z-10 h-screen w-screen flex-1 flex-col items-center pt-8">
				<Text className="text-white font-bold text-6xl self-start pl-8 pt-16">
					LifePlan
				</Text>
				<Text className="text-black font-bold text-4xl self-start pl-8 pt-4 pb-4">
					Sign In
				</Text>
				<Input
					type="numeric"
					secure={false}
					placeholder="Phone Number"
					val={phone}
					setInput={setPhone}
				/>
				<Input
					type="text"
					secure={true}
					placeholder="Password"
					val={password}
					setInput={setPassword}
				/>
				<View className="w-screen h-14" />
				<Buttons
					title="Sign In"
					onPress={() => navigation.navigate('Homepage')}
					isDark={true}
				/>
				<Buttons
					title="Create an Account"
					onPress={() => navigation.navigate('SignUp')}
					isDark={false}
				/>
			</View>
		</View>
	);
};

export default SignInScreen;
