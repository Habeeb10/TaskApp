import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AllNewsaStyles as styles} from './styles';
import {store} from '../../store';
import {NewsCard} from '../../common/newsCard';
import colors from '../../common/colors';

const {dispatch} = store;

export default function LandingPage({navigation}) {
  const {news, loading} = useSelector(state => state.allNews);

  useEffect(() => {
    dispatch.allNews.loadData();
  }, []);

  const _renderItem = ({item}) => {
    const {title, createdAt, author, id} = item;
    return (
      <NewsCard title={title} createdAt={createdAt} author={author} id={id} />
    );
  };
  return (
    <>
      <View style={styles.box}>
        {loading ? (
          <ActivityIndicator
            color={colors.irishblue}
            style={styles.indicator}
          />
        ) : (
          <FlatList
            data={news}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={_renderItem}
          />
        )}
      </View>
    </>
  );
}
