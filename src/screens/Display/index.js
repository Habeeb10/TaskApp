import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {store} from '../../store';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {DisplayCard} from '../../common/displaycard';
import {displayNewsstyles as styles} from './styles';
import {BackIcon, CommentIcon} from '../../../assets/svg';
import {ModalComponent} from '../../common/modal';
import {Input} from '../../common/input';

const {dispatch} = store;

export default function Display({navigation, route}) {
  const {comments, images, loading, currentNews} = useSelector(
    state => state.allNews,
  );
  const [editcommentModal, seteditcommentModalState] = useState(false);

  const [name, setName] = useState('');
  const [newavatar, setNewAvatar] = useState('');
  const [newcomment, setNewComment] = useState('');

  const {id} = route.params;

  console.log();
  useEffect(() => {
    dispatch.allNews.comments(id);
    dispatch.allNews.getImages(id);
    dispatch.allNews.getNewsById(id);
    dispatch.allNews.addComment(id);
  }, [id]);

  const _renderItem = ({item}) => {
    const {comment, avatar} = item;
    return <DisplayCard comment={comment} image={avatar} />;
  };

  const addNewComment = () => {
    const data = {
      mode: 'raw',
      raw: {
        newsId: {id},
        name: name,
        avatar: newavatar,
        comment: newcomment,
      },

      options: {
        raw: {
          language: 'json',
        },
      },
    };
    dispatch.allNews.addComment(data, id);
  };
  const editedComment = () => {
    const data = {
      mode: 'raw',
      raw: {
        name: name,
        avatar: newavatar,
        comment: newcomment,
      },

      options: {
        raw: {
          language: 'json',
        },
      },
    };
    dispatch.allNews.editComment(data, id);
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <View>
        <SliderBox
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          sliderBoxHeight={200}
          images={images}
          resizeMode={'cover'}
          circleLoop
          autoPlay
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => seteditcommentModalState(true)}>
          <CommentIcon width={23} height={23} />
          <Text>Comment</Text>
        </TouchableOpacity>
        <FlatList
          data={comments}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
        />
      </View>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('landing')}>
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.currentNews}>{currentNews?.title}</Text>
      </View>

      <ModalComponent
        title="Add comment"
        isVisible={editcommentModal}
        closeModal={() => {
          addNewComment();
          seteditcommentModalState(false);
          setName('');
          setNewAvatar('');
          setNewComment('');
        }}>
        <View style={styles.modalStyle}>
          <View style={styles.modalBox}>
            <Input value={name} onChange={setName} placeholder="name" />
            <Input
              value={newavatar}
              onChange={setNewAvatar}
              placeholder="avatar"
            />
            <Input
              value={newcomment}
              onChange={setNewComment}
              placeholder="add your comment"
            />
          </View>
        </View>
      </ModalComponent>
    </>
  );
}

const LoadingView = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="purple" absoluteFill />
    </View>
  );
};
