import React from 'react';
import colors from './colors';
import {Button as RNButton} from 'react-native-elements';
import {wp} from './utils';
import {StyleSheet} from 'react-native';

export const Button = ({title, onPress}) => {
  return (
    <RNButton
      onPress={onPress}
      title={title}
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: wp(100),
  },
  buttonStyle: {
    backgroundColor: colors.purple,
    borderRadius: 3,
  },
});
