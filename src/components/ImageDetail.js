import React from 'react';
import { ScrollView, Text, StyleSheet, Image } from 'react-native';


const ImageDetail = ({imageSource, title, imageScore}) => {
    return (
        <ScrollView>
            <Image 
                style={styles.imageStyle} 
                source={imageSource}
            />
            <Text>{title}</Text>
            <Text>Image Score - {imageScore}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;