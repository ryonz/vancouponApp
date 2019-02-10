import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import GeneralScreenComponent from '../Components/GeneralScreenComponent';

const favoriteItems = [];

class FavoriteShops extends React.Component {
  state = {
    headerTitle: 'お気に入り',
  }

  // //databaseの情報を取得
  // componentWillMount() {
  //   const proFavoriteItems = [];
  //   const databaseRef = firebase.database().ref('konbiniya');
  // }

  render() {
    const { headerTitle } = this.state;
    return (
      <View style={styles.container}>
        <GeneralScreenComponent headerTitle={headerTitle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoriteShops;