import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native</Text>
      <Text style={styles.subText}>My name is {name}</Text>
      <Button
        onPress={() => console.log('Button Pressed!')} 
        title="Go to Components Demo" 
      />
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
