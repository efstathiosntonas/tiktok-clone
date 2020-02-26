import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import {videosArray} from '../utils/utils';

const {width, height} = Dimensions.get('window');

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playingIndex: 0,
    };

    this.player = {};
  }

  renderItem = ({item}) => {
    const {playingIndex} = this.state;
    return (
      <View style={styles.videoView}>
        <Video
          paused={playingIndex !== item.id}
          repeat
          resizeMode="stretch"
          source={item.video}
          ref={ref => (this.player[item.id] = ref)}
          style={styles.backgroundVideo}
        />
      </View>
    );
  };

  onViewableItemsChanged = ({changed, viewableItems}) => {
    this.setState({
      playingIndex: changed[0].item.id,
    });

    viewableItems.forEach(item => {
      if (item.isViewable) {
        this.player[item.item.id].seek(0, 0);
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={videosArray}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height,
    position: 'absolute',
    top: 0,
    width,
  },
  container: {
    flex: 1,
  },
  videoView: {
    flex: 1,
    height,
    width,
  },
});

export default Home;
