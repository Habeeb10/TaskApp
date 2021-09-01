import React from 'react';
import {View} from 'react-native';
import {AllNewsStyles as styles} from '../screens/AllNews/styles';
import Modal from 'react-native-modal';
import {Button} from './button';
import {Input} from './input';

export const Newnewsmodal = ({
  isVisible,
  closeModal,
  onchangeAuthor,
  onchangeTitle,
  authorValue,
  titleValue,
}) => {
  return (
    <View>
      <Modal
        visible={isVisible}
        backdropColor="black"
        backdropOpacity={0.6}
        hasBackdrop>
        <View style={styles.modalStyle}>
          <View style={styles.modalBox}>
            <Input
              value={authorValue}
              onChange={onchangeAuthor}
              placeholder="Author"
            />
            <Input
              value={titleValue}
              onChange={onchangeTitle}
              placeholder="Title"
            />
            <Button
              Style={styles.button}
              title="Addnews"
              onPress={closeModal}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
