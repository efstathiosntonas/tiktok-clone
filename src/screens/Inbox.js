import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text>Inbox</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Inbox;
