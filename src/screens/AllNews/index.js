import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AllNewsStyles as styles} from './styles';
import {store} from '../../store';
import {NewsCard} from '../../common/newsCard';
import {Text} from 'react-native';
import {Button} from '../../common/button';
import {Newnewsmodal} from '../../common/newNewsModal';

const {dispatch} = store;

export default function LandingPage() {
  const {news, loading} = useSelector(state => state.allNews);
  const [modal, setModalState] = useState(false);
  const [newAuthor, setAuthor] = useState('');
  const [newTitle, setTitle] = useState('');

  useEffect(() => {
    dispatch.allNews.loadData();
  }, []);

  const _renderItem = ({item}) => {
    const {title, createdAt, author, id} = item;
    return (
      <NewsCard title={title} createdAt={createdAt} author={author} id={id} />
    );
  };

  const addNewNews = () => {
    const data = {
      mode: 'raw',
      raw: {
        author: newAuthor,
        title: newTitle,
      },
      options: {
        raw: {
          language: 'json',
        },
      },
    };
    dispatch.allNews.addNews(data);
  };

  if (loading) {
    return <LoadingView />;
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <View style={styles.newNews}>
            <Text style={styles.allnews}>All News</Text>
            <Button title="Add News" onPress={() => setModalState(true)} />
          </View>

          <FlatList
            style={styles.newslist}
            data={news}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        </View>
      </View>
      <Newnewsmodal
        isVisible={modal}
        closeModal={() => {
          addNewNews();
          setModalState(false);
          setAuthor('');
          setTitle('');
        }}
        authorValue={newAuthor}
        onchangeAuthor={setAuthor}
        onchangeTitle={setTitle}
        titleValue={newTitle}
      />
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
