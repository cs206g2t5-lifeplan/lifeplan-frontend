import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from './src/auth/SignUpScreen';
import HomeScreen from './src/home/HomeScreen';
import SignInScreen from './src/auth/SignInScreen';
import Footer from './src/shared/Footer';
import LinkCaregiverScreen from './src/auth/LinkCaregiverScreen';
import LinkCareRecipientScreen from './src/auth/LinkCareRecipientScreen';
import CareRecipientConfirmationScreen from './src/auth/CareRecipientConfirmationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="SignIn"
					component={SignInScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="SignUp"
					component={SignUpScreen}
					options={{
						headerShown: false,
						presentation: 'modal',
						animationTypeForReplace: 'push',
						animation: 'slide_from_right',
						animationDuration: 1000,
					}}
				/>
				<Stack.Screen
					name="Home"
					component={Footer}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Link Caregiver"
					component={LinkCaregiverScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Link Care Recipient"
					component={LinkCareRecipientScreen}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Care Recipient Confirmation"
					component={CareRecipientConfirmationScreen}
					options={{
						headerShown: false,
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
