import { useState } from 'react';
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	Image,
	Pressable,
} from 'react-native';
import Prompt from '../shared/Prompt';
import Add from '../../assets/add.png';
import Routine from '../../assets/routine.png';
import Tips from '../../assets/tips.png';

const HomeScreen = ({ navigation }) => {
	const [width, setWidth] = useState(0);
	const [shown, setShown] = useState(0);

	const find_dimensions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
	};

	const activity = [
		{
			color: '#A8DCD9',
			heading: 'Assistance',
			content: 'No assistance required',
			time: '',
		},
		{
			color: '#BFA3E2',
			heading: 'Last Prompt:',
			content: '',
			time: '10:41am',
		},
		{
			color: '#BFDCA8',
			heading: 'Next Prompt:',
			content: '',
			time: '11:37am',
		},
	];

	return (
		<View>
			<View className="h-10" />
			<Text
				className="pl-4 text-3xl font-bold self-start pb-4"
				style={{ color: '#60435F' }}
			>
				Welcome
			</Text>
			<ScrollView contentContainerStyle="flex-1 flex-col items-center w-screen h-screen">
				<View
					className="flex-1 self-center rounded-xl mt-4 w-10/12"
					onLayout={(event) => find_dimensions(event.nativeEvent.layout)}
					style={{ backgroundColor: '#D67AB1', height: width * 1.3 }}
				>
					<Text className="text-3xl font-bold text-white p-2">Overview</Text>
					<ScrollView
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						onScroll={({ nativeEvent }) => {
							if (nativeEvent.contentOffset.x < 640 / 3 && shown != 0) {
								setShown(0);
							} else if (
								nativeEvent.contentOffset.x > 640 / 3 &&
								nativeEvent.contentOffset.x < (640 / 3) * 2 &&
								shown != 1
							) {
								setShown(1);
							} else if (
								nativeEvent.contentOffset.x > (640 / 3) * 2 &&
								shown != 2
							) {
								setShown(2);
							}
						}}
					>
						{activity.map(({ heading, content, time, color }, index) => (
							<Prompt
								color={color}
								diameter={width}
								heading={heading}
								content={content}
								time={time}
								key={index}
							/>
						))}
					</ScrollView>
					<View className="flex-1 items-center flex-row justify-center gap-2 mb-8">
						<View
							className="rounded-full w-4 h-4 bg-white"
							style={{ opacity: shown == 0 ? 1 : 0.5 }}
						></View>
						<View
							className="rounded-full w-4 h-4 bg-white"
							style={{ opacity: shown == 1 ? 1 : 0.5 }}
						></View>
						<View
							className="rounded-full w-4 h-4 bg-white"
							style={{ opacity: shown == 2 ? 1 : 0.5 }}
						></View>
					</View>
				</View>
				<View className="w-10/12 flex-1 flex-row items-center justify-center mx-auto mt-2">
					<Pressable
						className="rounded-xl mt-4 w-1/2 mr-1"
						style={{ backgroundColor: '#D67AB1', height: width / 2 }}
						onPress={() => navigation.navigate('Add Activity')}
					>
						<Image
							source={Add}
							style={{ width: 54, height: 57 }}
							className="self-end mr-4 mt-4"
						/>
						<Text className="text-white text-2xl font-bold ml-4 mb-4">
							Add{'\n'}Activity
						</Text>
					</Pressable>
					<Pressable
						className="rounded-xl mt-4 w-1/2 ml-1"
						style={{ backgroundColor: '#D67AB1', height: width / 2 }}
						onPress={() => navigation.navigate('View Activity')}
					>
						<Image
							source={Routine}
							style={{ width: 54, height: 57 }}
							className="self-end mr-4 mt-4"
						/>
						<Text className="text-white text-2xl font-bold ml-4 mb-4">
							View{'\n'}Routine
						</Text>
					</Pressable>
				</View>
				<View
					className="w-11/12 self-center mt-4 mb-32"
					style={{ height: width / 2 }}
				>
					<Pressable onPress={() => navigation.navigate('Tips')}>
						<ImageBackground
							className="w-full h-full items-center self-center rounded-xl"
							style={{ height: width / 2 }}
							source={Tips}
							resizeMethod="scale"
							resizeMode="stretch"
						>
							<Text
								className="text-2xl font-bold self-end mr-4 mt-4 z-10"
								style={{ color: '#60435F' }}
							>
								Care Tips
							</Text>
						</ImageBackground>
					</Pressable>
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;
