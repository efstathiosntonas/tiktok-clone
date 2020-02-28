import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import Video from 'react-native-video';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Comments from '../components/Comments/Comments';
import {
  setActiveVideo,
  submitComment,
} from '../store/actions/videos/videos.actions';

const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playingIndex: 0,
      sheetVisible: false,
    };
    this.bs = React.createRef();
    this.commentTextInput = React.createRef();

    this.player = {};
  }

  openCommentsSheet = activeVideo => {
    const {navigation, setVideo} = this.props;
    navigation.setOptions({tabBarVisible: false});
    this.setState({
      sheetVisible: true,
    });
    setVideo(activeVideo);
    // might be a bug on bottom-sheet component, it needs to be called twice in order to close the sheet properly
    this.bs.current.snapTo(0);
    this.bs.current.snapTo(0);
  };

  closeCommentsSheet = () => {
    const {navigation} = this.props;
    navigation.setOptions({tabBarVisible: true});
    // might be a bug on bottom-sheet component, it needs to be called twice in order to close the sheet properly
    this.bs.current.snapTo(1);
    this.bs.current.snapTo(1);
    this.setState({
      sheetVisible: false,
    });
  };

  onViewableItemsChanged = ({changed, viewableItems}) => {
    const {setVideo, videos} = this.props;
    this.setState({
      playingIndex: changed[0].item.id,
    });

    setVideo(videos[changed[0].item.id]);

    viewableItems.forEach(item => {
      if (item.isViewable) {
        this.player[item.item.id].seek(0, 0);
      }
    });
    this.closeCommentsSheet();
  };

  submitComment = e => {
    const {text} = e.nativeEvent;
    const {addComment, activeVideo} = this.props;
    addComment(activeVideo, text);
    this.commentTextInput.current.clear();
  };

  renderItem = ({item}) => {
    const {playingIndex} = this.state;
    return (
      <View style={styles.videoView}>
        <Video
          paused={playingIndex !== item.id}
          ref={ref => (this.player[item.id] = ref)}
          repeat
          resizeMode="stretch"
          source={item.video}
          style={styles.backgroundVideo}
        />
        <View style={styles.buttons}>
          <MaterialCommunityIcons
            color="white"
            name="comment-text-multiple"
            onPress={() => this.openCommentsSheet(item)}
            size={35}
          />
          <Text style={styles.iconSubtitles}>{item.comments.length}</Text>
        </View>
      </View>
    );
  };

  renderBottomSheetContent = () => {
    const {activeVideo} = this.props;
    return (
      <View style={styles.sheetContentView}>
        <Comments
          close={this.closeCommentsSheet}
          comments={activeVideo.comments}
          extraData={activeVideo}
        />
      </View>
    );
  };

  render() {
    const {sheetVisible} = this.state;
    const {videos} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={videos}
          decelerationRate="fast"
          keyExtractor={item => item.id.toString()}
          onViewableItemsChanged={this.onViewableItemsChanged}
          removeClippedSubviews={false}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={height + 5}
          viewabilityConfig={{
            waitForInteraction: true,
            viewAreaCoveragePercentThreshold: 100,
          }}
        />
        <BottomSheet
          borderRadius={10}
          enabledContentGestureInteraction={false}
          enabledGestureInteraction={false}
          enableInnerScrolling
          initialSnap={1}
          ref={this.bs}
          renderContent={this.renderBottomSheetContent}
          snapPoints={[600, 0]}
          springConfig={{bounciness: 0, tension: 1, speed: 1}}
        />
        {sheetVisible ? (
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            style={styles.addCommentView}>
            <TextInput
              onSubmitEditing={this.submitComment}
              placeholder="Add Comment..."
              placeholderTextColor="#8A898E"
              ref={this.commentTextInput}
              returnKeyType="send"
              style={styles.commentTextInput}
            />
            <Fontisto
              name="slightly-smile"
              size={24}
              style={styles.commentTextInputIcons}
            />
            <Entypo
              name="email"
              size={24}
              style={styles.commentTextInputIcons}
            />
          </KeyboardAvoidingView>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addCommentView: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    width,
    zIndex: 9999,
  },
  backgroundVideo: {
    height,
    position: 'absolute',
    top: 0,
    width,
  },
  buttons: {
    alignSelf: 'flex-end',
    bottom: 150,
    position: 'absolute',
    right: 20,
    zIndex: 9999,
  },
  commentTextInput: {
    backgroundColor: 'white',
    color: '#838287',
    flex: 1,
    height: 50,
    marginBottom: 15,
    padding: 5,
  },
  commentTextInputIcons: {
    flexDirection: 'row',
    marginRight: 15,
  },
  container: {
    flex: 1,
  },
  iconSubtitles: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 15,
  },
  sheetContentView: {
    backgroundColor: '#F2F2F5',
    height,
    width,
    zIndex: 1,
  },
  videoView: {
    flex: 1,
    height,
    width,
  },
});

const mapStateToProps = state => {
  return {
    activeVideo: state.videos.activeVideo,
    videos: state.videos.videos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addComment: (activeVideo, text) =>
      dispatch(submitComment(activeVideo, text)),
    setVideo: activeVideo => dispatch(setActiveVideo(activeVideo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
