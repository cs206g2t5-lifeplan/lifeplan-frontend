import { useState, useEffect } from 'react';
import {
	View,
	Text,
	ImageBackground,
	ScrollView,
	Image,
	Pressable,
	Alert,
} from 'react-native';
import Prompt from '../shared/Prompt';
import Add from '../../assets/add.png';
import Routine from '../../assets/routine.png';
import Tips from '../../assets/tips.png';
import { getData } from '../../utils/storage';
import moment from 'moment';
import { Audio } from 'expo-av';

const HomeScreen = ({ navigation }) => {
	const [width, setWidth] = useState(0);
	const [shown, setShown] = useState(0);
	const [prompts, setPrompts] = useState([]);

	const find_dimensions = (layout) => {
		const { x, y, width, height } = layout;
		setWidth(width);
	};

	const [activity, setActivity] = useState([
		{
			color: '#A8DCD9',
			heading: 'Assistance',
			content: 'No assistance required',
			time: '',
		},
		{
			color: '#BFA3E2',
			heading: 'Last Prompt:',
			content: 'No assistance required',
			time: '',
		},
		{
			color: '#BFDCA8',
			heading: 'Next Prompt:',
			content: 'No assistance required',
			time: '',
		},
	]);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		let data = [];
		let interval = setInterval(async () => {
			data = await getData(new Date().toLocaleDateString());
			if (data.length > 0) {
				data.sort((a, b) => {
					let d1 = moment(new Date(a[0])).toDate();
					let d2 = moment(new Date(b[0])).toDate();
					if (
						d1.getHours() < d2.getHours() ||
						(d1.getHours() == d2.getHours() &&
							d1.getMinutes() < d2.getMinutes()) ||
						(d1.getHours() == d2.getHours() &&
							d1.getMinutes() == d2.getMinutes() &&
							d1.getSeconds() < d2.getSeconds())
					) {
						return -1;
					} else {
						return 1;
					}
				});
			}
			if (data.length != prompts.length) {
				clearInterval(interval);
				setPrompts(data);
			}
		}, 2000);
	}

	useEffect(() => {
		updatePrompt();
	}, [prompts]);

	const updatePrompt = () => {
		let data = prompts;
		let now = new Date();
		let ptr = 1;
		for (let i = 0; i < data.length; i++) {
			let d = moment(new Date(data[i][0])).toDate();
			if (
				now.getHours() == d.getHours() ||
				Math.abs(d.getHours() - now.getHours()) == 1
			) {
				ptr = i;
				break;
			}
		}
		let activities = [
			{
				color: '#A8DCD9',
				heading: 'Assistance',
				content: 'No assistance required',
				time: '',
			},
			{
				color: '#BFA3E2',
				heading: 'Last Prompt:',
				content: 'No assistance required',
				time: '',
			},
			{
				color: '#BFDCA8',
				heading: 'Next Prompt:',
				content: 'No assistance required',
				time: '',
			},
		];
		if (data.length) {
			activities[0].content = data[ptr][2];
			activities[0].time = 'Now';

			if (data.length > ptr + 1) {
				let d1 = moment(new Date(data[ptr + 1][0])).toDate();
				activities[2].content = data[ptr + 1][2];
				let time = d1.getHours() < 12 ? 'am' : 'pm';
				activities[2].time =
					(d1.getHours() % 12) + ':' + d1.getMinutes() + time;
			}
			if (ptr - 1 >= 0) {
				let d2 = moment(new Date(data[ptr - 1][0])).toDate();
				let time = d2.getHours() < 12 ? 'am' : 'pm';

				activities[1].content = data[ptr - 1][2];
				activities[1].time =
					(d2.getHours() % 12) + ':' + d2.getMinutes() + time;
			}
			setActivity(activities);
			Alert.alert(activities[0].content, 'Please complete the activity now!', [
				{
					text: 'OK!',
					style: 'cancel',
				},
			]);
			playSound(data[ptr][1]);
		}
	};

	async function playSound(player) {
		console.log('Loading Sound');
		try {
			const sound = new Audio.Sound();
			await sound.loadAsync({
				uri: player,
				shouldPlay: true,
			});
			await sound.playAsync();
		} catch (e) {
			console.log(e);
		}
	}

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
							resizeMethod="scale"
							resizeMode="stretch"
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
							resizeMethod="scale"
							resizeMode="stretch"
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
