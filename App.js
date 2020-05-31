import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header headerText="Albums" />
      <AlbumList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
