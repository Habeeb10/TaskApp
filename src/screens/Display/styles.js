import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';
import colors from '../../common/colors';

export const displayNewsstyles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    marginTop: hp(30),
    backgroundColor: colors.pablue,
    marginBottom: 20,
    width: '100%',
    paddingVertical: wp(10),
  },
  summary: {
    fontSize: hp(1),
    lineHeight: hp(20),
    textAlign: 'center',
  },
});
