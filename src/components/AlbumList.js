import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = {
    albums: [],
  };

  UNSAFE_componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}));
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} record={album} />
    ));
  }

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <View>{this.renderAlbums()}</View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default AlbumList;
