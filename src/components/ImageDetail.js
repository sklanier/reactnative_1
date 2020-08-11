import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const ImageDetail = ({imageSource, title, imageScore}) => {
    return (
        <FlatList
            
        >
            <View>
                <Image 
                    style={styles.imageStyle} 
                    source={imageSource}
                />
                <Text>{title}</Text>
                <Text>Image Score - {imageScore}</Text>
            </View>
        </FlatList>

    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;