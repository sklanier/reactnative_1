import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, FlatList } from 'react-native';

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	return (
		<View>
			<Button
				title="Add a Color!"
				onPress={() => {
					setColors([...colors, randomColor()]);
				}}
			/>
			
			<FlatList 
				data={colors}
				renderItem={({ item }) => {
					return<View
									style={{ height: 100, width: 100, backgroundColor: randomColor() }}
								/>
				}}
			/>
		</View>
	)
}

let randomColor = () => {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);

	return `rgb(${red}, ${green}, ${blue})`;
}