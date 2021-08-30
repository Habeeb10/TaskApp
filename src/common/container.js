import {SafeAreaView, View, StyleSheet} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';

export const Container = ({children, barColor = 'red', backgroundColor}) => {
  return (
    <>
      <ScrollView
        vertical={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}>
        <SafeAreaView style={{backgroundColor: barColor}} />
        <View style={[backgroundColor, styles.container]}>{children}</View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
