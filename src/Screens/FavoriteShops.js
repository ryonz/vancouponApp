import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import firebase from 'firebase';
import Header from '../Components/Header';
import EachShopScreenMiddleComponent from '../Components/EachShopScreenMiddleComponent';


class FavoriteShops extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <EachShopScreenMiddleComponent />
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