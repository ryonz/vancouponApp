import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class HomeAllShopListButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeAllShopListButton</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.077,
    backgroundColor: 'green',
  },
});

export default HomeAllShopListButton;