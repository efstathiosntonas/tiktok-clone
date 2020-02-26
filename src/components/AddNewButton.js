import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../assets/svgs/add_button.svg';

const AddNewButton = () => {
  return (
    <View style={styles.container}>
      <Button width={90} height={90} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AddNewButton;
