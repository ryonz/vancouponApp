import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class HomeAllCouponListButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeAllCouponListButton</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.077,
    backgroundColor: 'pink',
  },
});

export default HomeAllCouponListButton;