import { View, Image, Text } from 'react-native';
import ellipseWhite from '../../assets/EllipseWhiteRight.png';
import ellipsePink from '../../assets/EllipsePinkRight.png';
import Input from '../shared/Input';
import Buttons from '../shared/Buttons';

export default function SignUpScreen({ navigation }) {
	return (
		<View style={{ backgroundColor: '#A8DCD9' }} className="w-screen h-screen">
			<Image className="absolute bottom-0 left-0" source={ellipseWhite} />
			<Image className="absolute bottom-0 left-0" source={ellipsePink} />
			<View className="z-10 h-screen w-screen flex-1 flex-col items-center pt-8">
				<Text className="text-white font-bold text-6xl self-start pl-8 pt-32">
					LifePlan
				</Text>
				<Text className="text-black font-bold text-4xl self-start pl-8 pt-8">
					Register
				</Text>
				<Input type="numeric" secure={false} placeholder="Phone Number" />
				<Input type="text" secure={true} placeholder="Password" />
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
}
