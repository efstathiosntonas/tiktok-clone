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
  }

  renderItem = ({item}) => {
    const {playingIndex} = this.state;
    return (
      <View style={styles.videoView}>
        <Video
          fullscreen
          paused={playingIndex !== item.id}
          preTriggerRatio={0.5}
          repeat
          resizeMode="stretch"
          source={item.video}
          style={styles.backgroundVideo}
        />
      </View>
    );
  };

  onViewableItemsChanged = ({changed}) => {
    this.setState({playingIndex: changed[0].item.id});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={videosArray}
          decelerationRate="fast"
          keyExtractor={item => item.id}
          onViewableItemsChanged={this.onViewableItemsChanged}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={height + 10}
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
