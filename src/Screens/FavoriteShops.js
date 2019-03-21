import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Header from '../Components/Header';
import EachShopScreenMiddleComponent from '../Components/EachShopScreenMiddleComponent';

@inject('store')
@observer
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