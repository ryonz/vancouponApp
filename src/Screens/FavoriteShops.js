import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import GeneralScreenComponent from '../Components/GeneralScreenComponent';

class FavoriteShops extends React.Component {
  state = {
    headerTitle: 'お気に入り',
  }

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