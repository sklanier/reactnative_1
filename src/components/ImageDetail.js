import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { AuthSession } from 'expo';

const ImageDetail = props => {
    return (
        <View>
            <Image source={props.imageSource}/>
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;