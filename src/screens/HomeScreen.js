import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Getting started with React Native</Text>
    <Text style={styles.subText}>My name is {name}</Text>
  </View>
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
