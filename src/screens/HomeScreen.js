import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native</Text>
      <Text style={styles.subText}>My name is {name}</Text>
      <Button
        onPress={() => props.navigation.navigate('Components')} 
        title="Go to Components Demo" 
      />
      <TouchableOpacity
        onPress={() => console.log('Pressed')}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};
let name = "Steve";
const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  subText: {
    fontSize: 20
    
  }
});

export default HomeScreen;
