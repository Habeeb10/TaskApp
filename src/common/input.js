import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native';
import colors from '../common/colors';
import {hp, wp} from './utils';

export const Input = ({placeholder, value, onChange, style}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: colors.grey,
    borderWidth: 1,
    height: hp(50),
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: wp(7),
    marginBottom: hp(20),
  },
});
