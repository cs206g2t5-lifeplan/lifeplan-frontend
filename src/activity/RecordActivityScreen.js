import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	LogBox,
	Pressable,
	Image,
} from 'react-native';
import Record from '../../assets/record.png';
import Buttons from '../shared/Buttons';
import { Audio } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { storeData } from '../../utils/storage';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const RecordActivityScreen = ({ route, navigation }) => {
	const [recording, setRecording] = React.useState();
	const [player, setPlayer] = React.useState();
	const [currDate, setCurrDate] = useState(new Date());
	const [showItem, setShowItem] = useState(true);

	async function startRecording() {
		try {
			setTitle('Stop Recording');
			console.log('Requesting permissions..');
			await Audio.requestPermissionsAsync();
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			});

			console.log('Starting recording..');
			const { recording } = await Audio.Recording.createAsync(
				Audio.RecordingOptionsPresets.HIGH_QUALITY
			);
			setRecording(recording);
			console.log('Recording started');
		} catch (err) {
			console.error('Failed to start recording', err);
		}
	}

	async function stopRecording() {
		console.log('Stopping recording..');
		setTitle('Press to record');
		setRecording(undefined);
		await recording.stopAndUnloadAsync();
		await Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
		});
		const uri = recording.getURI();
		console.log('Recording stopped and stored at', uri);
		const dir = `${FileSystem.documentDirectory}/lifeplan`;
		const { exists } = await FileSystem.getInfoAsync(dir);
		try {
			if (!exists) {
				console.log('creating directory');
				await FileSystem.makeDirectoryAsync(dir);
			}
			let words = params.heading.split(' ');
			console.log(`${dir}/${new Date()}-${words[2]}.m4a`);
			await FileSystem.copyAsync({
				from: uri,
				to: `${dir}/${new Date().getDate()}-${words[2]}.m4a`,
			});

			setPlayer(`${dir}/${params.heading}.m4a`);
		} catch (e) {
			console.log(e);
		}
	}

	function getDurationFormatted(millis) {
		const minutes = millis / 1000 / 60;
		const minutesDisplay = Math.floor(minutes);
		const seconds = Math.round((minutes - minutesDisplay) * 60);
		const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
		return `${minutesDisplay}:${secondsDisplay}`;
	}

	const [currentSound, setSound] = React.useState();

	async function playSound() {
		if (!isPlaying) {
			setIsPlaying(true);
			console.log('Loading Sound');
			try {
				const sound = new Audio.Sound();
				setSound(sound);
				await sound.loadAsync({
					uri: player,
					shouldPlay: true,
				});
				await sound.playAsync();
				sound.setOnPlaybackStatusUpdate(async (r) => {
					if (r.didJustFinish) {
						setIsPlaying(false);
					}
				});
			} catch (e) {
				console.log(e);
			}
		} else {
			console.log('Loading Sound');
			setIsPlaying(false);
			try {
				await currentSound.pauseAsync();
			} catch (e) {
				console.log(e);
			}
		}
	}

	LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
	LogBox.ignoreAllLogs(); //Ignore all log notifications
	const [params, setParams] = useState({
		heading: '',
		btnLeftTitle: '',
		btnRightTitle: '',
		btnRight: () => {},
	});
	const [shown, setShown] = useState(true);
	const [w1, setW1] = useState(0);
	const [w2, setW2] = useState(0);
	const [w3, setW3] = useState(0);
	const [title, setTitle] = useState('Press to record');
	const [isPlaying, setIsPlaying] = useState(false);

	const find_dimesion_screen = (layout) => {
		const { x, y, width, height } = layout;
		setW1(width);
	};

	const find_dimesion_button = (layout) => {
		const { x, y, width, height } = layout;
		setW2(width);
	};

	const find_dimesion_text = (layout) => {
		const { x, y, width, height } = layout;
		setW3(width);
	};

	useEffect(() => {
		if (route.params) {
			setParams(route.params);
			// Post updated, do something with `route.params.post`
			// For example, send the post to the server
		}
	}, [route.params]);

	useEffect(() => {
		if (!shown) {
			setTimeout(() => {
				navigation.goBack();
			}, 50);
		}
	}, [shown]);

	const saveData = async () => {
		await storeData(
			currDate.toLocaleDateString() + ' ' + currDate.toLocaleTimeString(),
			player
		);
	};

	const changeDate = (event, selectedDate) => {
		console.log(selectedDate);
		// on cancel set date value to previous date
		if (event?.type === 'dismissed') {
			setCurrDate(currDate);
			return;
		}
		setCurrDate(selectedDate);
		setShowItem(false);
	};

	return !player ? (
		<View
			className="w-screen h-full"
			onLayout={(event) => find_dimesion_screen(event.nativeEvent.layout)}
		>
			<Pressable
				className="w-screen h-full bg-black"
				style={{ opacity: 0.4, display: shown ? 'flex' : 'none' }}
				onPress={() => {
					setShown(false);
				}}
			></Pressable>
			<Pressable
				className="absolute z-10"
				style={{
					top: (w1 - w2) / 2,
					left: (w1 - w2) / 2,
				}}
				onLayout={(event) => find_dimesion_button(event.nativeEvent.layout)}
				onPress={recording ? stopRecording : startRecording}
			>
				<Image source={Record} />
				<Text
					className="text-white text-xl absolute"
					style={{
						left: (w2 - w3) / 2,
						top: (w1 - w3 + 50) / 2,
					}}
					onLayout={(event) => find_dimesion_text(event.nativeEvent.layout)}
				>
					{title}
				</Text>
			</Pressable>
			<View
				className="w-screen items-center justify-center bg-white h-1/3 border"
				style={{
					display: shown ? 'flex' : 'none',
					position: 'absolute',
					bottom: 0,
					borderColor: '#60435F',
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
				}}
			>
				<Text className="font-bold text-m" style={{ color: '#60435F' }}>
					Press to record your voice!
				</Text>
			</View>
		</View>
	) : (
		<View
			className="w-screen h-full"
			onLayout={(event) => find_dimesion_screen(event.nativeEvent.layout)}
		>
			<Pressable
				className="w-screen h-full bg-black"
				style={{ opacity: 0.4, display: shown ? 'flex' : 'none' }}
				onPress={() => {
					setShown(false);
				}}
			></Pressable>
			<Pressable
				className="absolute z-10"
				style={{
					top: (w1 - w2) / 2,
					left: (w1 - w2) / 2,
				}}
				onLayout={(event) => find_dimesion_button(event.nativeEvent.layout)}
				onPress={recording ? stopRecording : startRecording}
			>
				<Image source={Record} />
				<Text
					className="text-white text-xl absolute"
					style={{
						left: (w2 - w3) / 2,
						top: (w1 - w3 + 50) / 2,
					}}
					onLayout={(event) => find_dimesion_text(event.nativeEvent.layout)}
				>
					{title}
				</Text>
			</Pressable>
			<View
				className="w-screen items-center justify-center bg-white h-1/3 border"
				style={{
					display: shown ? 'flex' : 'none',
					position: 'absolute',
					bottom: 0,
					borderColor: '#60435F',
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
				}}
			>
				<Text className="font-bold text-m" style={{ color: '#60435F' }}>
					{params.heading}
				</Text>
				{showItem && (
					<RNDateTimePicker
						mode="datetime"
						value={currDate}
						onChange={(event, date) => changeDate(event, date)}
					/>
				)}
				<View className="flex-row mx-auto items-center justify-center w-screen">
					<View className="w-1/3 flex-1 items-center">
						<Buttons
							isDark={false}
							title={params.btnLeftTitle}
							onPress={() => setShown(false)}
						/>
					</View>

					<Pressable
						className="rounded-full w-12 h-12 items-center justify-center mt-2"
						style={{
							display: shown ? 'flex' : 'none',
							backgroundColor: '#D67AB1',
						}}
						onPress={() => {
							playSound();
						}}
					>
						<MaterialCommunityIcons
							name={isPlaying ? 'pause' : 'play'}
							size={40}
							color="#fff"
						/>
					</Pressable>
					<View className="w-1/3 flex-1 items-center">
						<Buttons isDark={true} title="Save" onPress={saveData} />
					</View>
				</View>
			</View>
		</View>
	);
};

export default RecordActivityScreen;
