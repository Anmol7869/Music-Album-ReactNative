import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';

const Header = ({headerText}) => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text style={styles.text}>{headerText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    marginTop: 0,
    paddingTop: 10,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  },
  text: {
    fontSize: 20,
  },
});

export default Header;
