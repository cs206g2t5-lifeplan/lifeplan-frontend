import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpScreen from './src/auth/SignUpScreen';
import SignInScreen from './src/auth/SignInScreen';
import Footer from './src/shared/Footer';
import LinkCaregiverScreen from './src/auth/LinkCaregiverScreen';
import LinkCareRecipientScreen from './src/auth/LinkCareRecipientScreen';
import CareRecipientConfirmationScreen from './src/auth/CareRecipientConfirmationScreen';
import Modal from './src/shared/Modal';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ presentation: 'transparentModal' }}>
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
					name="Homepage"
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
				<Stack.Screen
					name="Modal"
					component={Modal}
					options={{
						tabBarVisible: false,
						headerShown: false,
						animationTypeForReplace: 'push',
						animation: 'slide_from_bottom',
						animationDuration: 1000,
					}}
					mode="modal"
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
