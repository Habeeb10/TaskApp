import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {hp, wp} from './utils';
import colors from '../common/colors';
import {DeleteIcon, EditIcon} from '../../assets/svg';

export const DisplayCard = ({comment, image, onEdit, onDelete, isEditing}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Image source={{uri: image}} style={styles.image} />
        {isEditing ? null : <Text style={styles.comment}>{comment}</Text>}
      </View>
      <View style={styles.rightSide}>
        <TouchableOpacity activeOpacity={0.5} onPress={onEdit}>
          <EditIcon width={15} height={15} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={onDelete}>
          <DeleteIcon width={15} height={15} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: wp(30),
    height: hp(30),
    borderRadius: hp(30),
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(50),
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },
  comment: {
    marginLeft: wp(10),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.magenta,
    borderBottomWidth: 1,
    marginTop: hp(20),
    paddingVertical: hp(5),
    justifyContent: 'space-between',
    marginHorizontal: wp(15),
  },
});
