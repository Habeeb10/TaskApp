import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {hp} from './utils';
import colors from './colors';
import {useNavigation} from '@react-navigation/core';
import {format} from 'date-fns';
import {Button} from './button';

export const NewsCard = ({title, createdAt, author, id}) => {
  const navigation = useNavigation();
  const dateFormatter = format(new Date(createdAt), 'PPpp');
  return (
    <View style={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}> {title}</Text>
        <Button
          title="view more"
          onPress={() => navigation.navigate('display', {title, id})}
        />
      </View>
      <View style={styles.datecontainer}>
        <Text>{dateFormatter}</Text>
        <Text>By: {author}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: hp(18),
    fontWeight: '500',
  },
  datecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    height: hp(138),
    backgroundColor: colors.white,
    borderRadius: hp(10),
    marginBottom: hp(20),
    borderWidth: 1,
    borderColor: colors.magenta,
    padding: hp(20),
  },
  titlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(20),
  },
});
