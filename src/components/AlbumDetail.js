import React from 'react';
import {Text, View, StyleSheet, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({record}) => {
  const {title, artist, thumbnail_image, image, url} = record;

  return (
    <Card>
      <CardSection>
        <View style={styles.viewContainer}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: thumbnail_image}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={styles.imageStyle} source={{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now!</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignContent: 'space-around',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  },
});

export default AlbumDetail;
