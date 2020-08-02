import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1'},
    { name: 'Friend #2'},
    { name: 'Friend #3'},
    { name: 'Friend #4'},
    { name: 'Friend #5'},
    { name: 'Friend #6'},
    { name: 'Friend #7'},
    { name: 'Friend #8'},
    { name: 'Friend #9'},
  ];

  return (
    <FlatList
      //PROPS
      horizontal //same as "horizontal={true}"
      showsHorizontalScrollIndicator={false} //hides horiz scroll bar
      keyExtractor={(friend) => friend.name}
      data={friends} 
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 50
  }
});

export default ListScreen;