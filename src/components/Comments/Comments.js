import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleComment from './SingleComment';

const Comments = ({comments = [], close, extraData}) => {
  const renderComments = ({item}) => <SingleComment comment={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.commentsTextView}>
          <Text style={styles.commentsText}>{comments.length} Comments</Text>
        </View>
        <View style={styles.closeButton}>
          <MaterialCommunityIcons
            color="black"
            name="close"
            onPress={close}
            size={22}
          />
        </View>
      </View>
      <View style={styles.commentView}>
        <FlatList
          data={comments}
          extraData={extraData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderComments}
          style={styles.flatList}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    alignItems: 'center',
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  commentView: {
    marginTop: 10,
    padding: 10,
  },
  commentsText: {
    fontWeight: 'bold',
  },
  commentsTextView: {
    justifyContent: 'flex-end',
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#f2f2f4',
    flex: 1,
  },
  flatList: {
    height: 480,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
});

export default Comments;
