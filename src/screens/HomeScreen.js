import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native</Text>
      <Text style={styles.subText}>My name is {name}</Text>
      <Button
        onPress={() => console.log('Laura is BEAUTIFUL!!! <3')} 
        title="Go to Components Demo" 
      />
      <TouchableOpacity>
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
