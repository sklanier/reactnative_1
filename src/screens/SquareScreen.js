import React, { useState } from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

const setColor = (color, change) => {

    switch (color) {
        case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
        case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;
        case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return;
    }
}

    return <View>
        <ColorCounter
            onIncrease={() => setRed(red + COLOR_INCREMENT)}
            onDecrease={() => setRed(red - COLOR_INCREMENT)}
            color="Red"
        />
        <ColorCounter
            onIncrease={() => setGreen(green + COLOR_INCREMENT)}
            onDecrease={() => setRed(green - COLOR_INCREMENT)}
            color="Green"
        />
        <ColorCounter
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
            color="Blue"
        />
        <View style={{ 
            height: 150, 
            width: 150, 
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
            }}
        />
    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;