import {StyleSheet} from 'react-native';
import {hp, wp} from '../../common/utils';
import colors from '../../common/colors';

export const displayNewsstyles = StyleSheet.create({
  modalBox: {
    backgroundColor: colors.white,
    borderRadius: hp(10),
    padding: hp(50),
    flex: 1,
  },
  modalStyle: {
    backgroundColor: colors.white,
    bottom: hp(0),
    left: hp(0),
    right: hp(0),
    height: hp(250),
    borderRadius: hp(10),
  },
  currentNews: {
    marginLeft: 20,
    fontSize: hp(16),
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: wp(15),
    marginTop: hp(20),
    justifyContent: 'space-between',
    width: wp(90),
  },

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    top: hp(20),
    left: 5,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },

  content: {
    marginTop: hp(30),
    backgroundColor: colors.pablue,
    marginBottom: hp(20),
    width: '100%',
    paddingVertical: wp(10),
  },
});
