import React from 'react';
import colors from './colors';
import {Button as RNButton} from 'react-native-elements';
import {hp, wp} from './utils';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from 'react-native';

export const Button = ({title, Style, loading, onPress}) => {
  return (
    <RNButton
      onPress={onPress}
      title={
        loading ? (
          <ActivityIndicator
            size="small"
            color="orange"
            style={styles.button}
          />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )
      }
      buttonStyle={[styles.buttonStyle, Style]}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: hp(14),
    fontWeight: '400',
    color: colors.white,
  },
  button: {marginTop: 10},
  buttonStyle: {
    backgroundColor: colors.purple,
    borderRadius: 3,
    width: wp(72.5),
    height: hp(32.5),
  },
});
