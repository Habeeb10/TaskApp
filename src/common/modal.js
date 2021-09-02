import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {Button} from './button';
import {hp, wp} from './utils';

export const ModalComponent = ({
  children,
  isVisible,
  closeModal,
  title,
  style,
}) => {
  return (
    <>
      <Modal
        visible={isVisible}
        backdropColor="black"
        backdropOpacity={0.7}
        hasBackdrop>
        <View style={[styles.modalBox, style]}>{children}</View>
        <Button Style={styles.button} title={title} onPress={closeModal} />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    width: wp(100),
    height: hp(35),
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  modalBox: {
    height: hp(200),
  },
});
