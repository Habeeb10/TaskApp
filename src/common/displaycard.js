import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
export const DisplayCard = ({comment}) => {
  return (
    <View style={styles.container}>
      <Text>{comment}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});
