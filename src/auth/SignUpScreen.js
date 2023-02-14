import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import ellipseWhite from '../../assets/EllipseWhiteRight.png';
import ellipsePink from '../../assets/EllipsePinkRight.png';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';

const SignUpScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [code, setCode] = useState('+65');
	const [phone, setPhone] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	return (
		<View style={{ backgroundColor: '#A8DCD9' }} className="w-screen h-screen">
			<Image className="absolute bottom-0 left-0" source={ellipseWhite} />
			<Image className="absolute bottom-0 left-0" source={ellipsePink} />
			<View className="z-10 h-screen w-screen flex-1 flex-col items-center pt-2">
				<Text className="text-white font-bold text-6xl self-start pl-8 pt-32">
					LifePlan
				</Text>
				<Text className="text-black font-bold text-4xl self-start pl-8 pb-8">
					Register
				</Text>
				<View className="flex-row items-center justify-center w-11/12">
					<Input
						secure={false}
						placeholder="First Name"
						val={firstName}
						setInput={setFirstName}
						width="40%"
						align="start"
					/>
					<Input
						secure={false}
						placeholder="Last Name"
						val={lastName}
						setInput={setLastName}
						width="40%"
						align="end"
					/>
				</View>
				<View className="flex-row items-center justify-center w-11/12">
					<Input
						secure={false}
						placeholder={code}
						val={code}
						setInput={setCode}
						width="25%"
						align="start"
					/>
					<Input
						secure={false}
						placeholder="Phone Number"
						val={phone}
						setInput={setPhone}
						width="55%"
						align="end"
					/>
				</View>
				<Input
					type="text"
					secure={true}
					placeholder="Password"
					val={password}
					setInput={setPassword}
				/>
				<Input
					type="text"
					secure={true}
					placeholder="Confirm Password"
					val={passwordConfirm}
					setInput={setPasswordConfirm}
				/>
				<View className="w-screen h-14" />
				<Buttons
					title="Register"
					onPress={() => navigation.navigate('Home')}
					isDark={true}
				/>
				<Buttons
					title="Back to Sign In"
					onPress={() => navigation.navigate('SignIn')}
					isDark={false}
				/>
			</View>
		</View>
	);
};

export default SignUpScreen;
