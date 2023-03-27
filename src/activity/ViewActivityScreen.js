import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import moment from 'moment';
import Timetable from 'react-native-calendar-timetable';
import { getData, removeData } from '../../utils/storage';

const ViewActivityScreen = ({ navigation }) => {
	const [date, setDate] = React.useState(new Date());

	const [from] = React.useState(moment().subtract(3, 'days').toDate());
	const [till] = React.useState(moment().add(3, 'days').toISOString());
	const range = { from, till };

	const [items, setItems] = React.useState([]);

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

	return (
		<ScrollView className="bg-white">
			<Timetable
				// these two are required
				items={items}
				renderItem={(props) => <YourComponent {...props} />}
				// provide only one of these
				date={date}
				range={range}
			/>
		</ScrollView>
	);
};

function YourComponent({ style, item, title, daysTotal }) {
	return (
		<View
			style={{
				...style, // apply calculated styles, be careful not to override these accidentally (unless you know what you are doing)
				backgroundColor: '#D67AB1',
				borderRadius: 10,
				elevation: 5,
			}}
		>
			<Text>{item.title}</Text>
		</View>
	);
}

export default ViewActivityScreen;
