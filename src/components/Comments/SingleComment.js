import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width} = Dimensions.get('window');

const SingleComment = ({comment}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerCommentView}>
        <Image style={styles.avatar} source={{uri: comment.avatar}} />
        <View style={styles.commentInfoView}>
          <Text style={styles.commentName}>{comment.name}</Text>
          <Text>{comment.body}</Text>
          {comment.likedByCreator ? (
            <Text style={styles.likedByCreator}>Liked by Creator</Text>
          ) : null}
        </View>
        <View style={styles.buttons}>
          <MaterialCommunityIcons
            size={20}
            name="heart-outline"
            color="#838287"
          />
          <Text style={styles.iconSubtitles}>{comment.likes}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  commentInfoView: {
    flexDirection: 'column',
    width: width - 120,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 15,
  },
  innerCommentView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  buttons: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  iconSubtitles: {
    color: '#838287',
    fontSize: 15,
    alignSelf: 'center',
  },
  likedByCreator: {
    padding: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#E5E5E7',
    width: 120,
    color: '#7A7C80',
    fontWeight: 'bold',
  },
  commentName: {
    color: '#838287',
    fontWeight: 'bold',
  },
});

export default SingleComment;
