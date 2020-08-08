import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    return (
        <View>
            <Button 
                title="Add a Color!"
            />
            <View 
                style={
                    {
                    height: 100, 
                    width: 100, 
                    backgroundColor: randomColor()
                    }
                }
            >
            </View>
        </View>
    );
};

const randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;