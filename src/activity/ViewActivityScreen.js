import React, { useEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
	Pressable,
} from 'react-native';
import moment from 'moment';
import Timetable from 'react-native-calendar-timetable';
import { getData, removeData } from '../../utils/storage';
import DateTimePicker from '@react-native-community/datetimepicker';

const ViewActivityScreen = ({ navigation }) => {
	const [date, setDate] = React.useState(new Date());

	const [from] = React.useState(moment().subtract(3, 'days').toDate());
	const [till] = React.useState(moment().add(3, 'days').toISOString());
	const range = { from, till };

	const [items, setItems] = React.useState([]);
	const [showItem, setShowItem] = React.useState(false);

	useEffect(async () => {
		const data = await getData(date.toLocaleDateString());
		console.log(data);
		let prompts = [];
		data.map((item) => {
			prompts.push({
				title: item[2],
				startDate: moment(new Date(item[0])).toDate(),
				endDate: moment(new Date(item[0])).add(1, 'hour').toDate(),
			});
		});
		setItems(prompts);
	}, []);

	const changeDate = (event, selectedDate) => {
		// on cancel set date value to previous date
		setShowItem(false);
		if (event?.type === 'dismissed') {
			setDate(date);
			return;
		}
		setDate(selectedDate);
	};

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const getTime = () => {
		return (
			date.getDate() +
			' ' +
			monthNames[date.getMonth()] +
			' ' +
			date.getFullYear()
		);
	};

	return (
		<View className="h-screen w-full bg-white flex-1 items-start">
			<View className="h-16 bg-white">
				<Text
					className="font-bold text-m text-white rounded-full items-center justify-center mt-2 p-2 ml-4"
					style={{ backgroundColor: '#D67AB1' }}
					onPress={() => {
						setShowItem(true);
					}}
				>
					{getTime()}
				</Text>
			</View>
			<ScrollView className="bg-white">
				<Timetable
					// these two are required
					items={items}
					renderItem={(props) => <Task {...props} />}
					// provide only one of these
					date={date}
					range={range}
				/>
				{showItem && (
					<DateTimePicker
						value={date}
						mode={'date'}
						is24Hour={true}
						display="default"
						onChange={changeDate}
					/>
				)}
			</ScrollView>
		</View>
	);
};

function Task({ style, item, title, daysTotal }) {
	return (
		<View
			style={{
				...style, // apply calculated styles, be careful not to override these accidentally (unless you know what you are doing)
				backgroundColor: '#D67AB1',
				borderRadius: 10,
				elevation: 5,
			}}
		>
			<Text className="text-white p-4">{item.title}</Text>
		</View>
	);
}

export default ViewActivityScreen;
