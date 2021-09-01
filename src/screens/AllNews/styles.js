import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';
import colors from '../../common/colors';

export const AllNewsStyles = StyleSheet.create({
  button: {
    width: wp(100),
    height: hp(35),
    alignSelf: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  author: {
    fontWeight: '500',
    fontSize: hp(18),
    marginBottom: hp(10),
  },
  title: {
    fontWeight: '500',
    fontSize: hp(18),
    marginBottom: hp(10),
  },
  newslist: {
    paddingTop: hp(10),
  },
  modalStyle: {
    backgroundColor: colors.white,
    bottom: hp(0),
    left: hp(0),
    right: hp(0),
    height: hp(250),
    borderRadius: hp(10),
  },
  newNews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  allnews: {
    fontWeight: '500',
    fontSize: hp(18),
    marginBottom: hp(10),
  },
  container: {
    marginTop: hp(20),
    paddingHorizontal: wp(10),
    flex: 1,
  },
  indicator: {
    marginTop: hp(20),
  },

  modalBox: {
    backgroundColor: colors.white,
    borderRadius: hp(10),
    padding: hp(50),
    flex: 1,
  },
});
