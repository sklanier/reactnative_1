import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Steve's Native App</Text>
      <Text style={styles.subText}>let's do this</Text>
      <Button
        //callback function: ONPRESS
        onPress={() => navigation.navigate('Components')} 
        title="Go to Components Demo!" 
      />
      <Button
        onPress={() => navigation.navigate('List')} 
        title="Go to List Demo!" 
      />
      <Button
        onPress={() => navigation.navigate('Image')} 
        title="Go to Image Demo!" 
      />
      <Button
        onPress={() => navigation.navigate('Counter')} 
        title="Go to Counter Demo!" 
      />
      <Button
        onPress={() => navigation.navigate('Color')} 
        title="Go to Color Demo!" 
      />
      <Button
        onPress={() => navigation.navigate('Square')} 
        title="Go to Square Demo!" 
      />
      <Button
        onPress={() => navigation.navigate('Text')} 
        title="Go to Text Demo!" 
      />
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('List')}
      >
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};
let name = "Steve";
const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  subText: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default HomeScreen;
