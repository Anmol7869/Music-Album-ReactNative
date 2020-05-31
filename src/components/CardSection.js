import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const CardSection = props => {
  return <SafeAreaView style={styles.container}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
});

export default CardSection;
