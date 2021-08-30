import React, {useEffect} from 'react';
import {View} from 'react-native';
import {store} from '../../store';
import {useSelector} from 'react-redux';
import {FlatList} from 'react-native';
import {DisplayCard} from '../../common/displaycard';
import {Button} from '../../common/button';

const {dispatch} = store;

export default function Display({navigation, route}) {
  const {comments} = useSelector(state => state.allNews);
  const {id} = route.params;

  console.log(comments);

  useEffect(() => {
    dispatch.allNews.comments(id);
  }, [id]);

  const _renderItem = ({item}) => {
    const {comment} = item;
    return <DisplayCard comment={comment} />;
  };
  return (
    <>
      <View>
        <FlatList
          data={comments}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={_renderItem}
        />
      </View>
      <Button title="back" onPress={() => navigation.pop()} />
    </>
  );
}

// return (
//   <Container>
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <View style={styles.content}>
//         <Text></Text>
//       </View>
//     </View>
//     <BackButton title="Back" onPress={() => navigation.navigate('landing')} />
//   </Container>
// );
