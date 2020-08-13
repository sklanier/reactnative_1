import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SquareScreen = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title={`Increase ${color}`}
                onPress={() => onIncrease()}
            />
            <Button
                title={`Decrease ${color}`}
                onPress={() => onDecrease()}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;