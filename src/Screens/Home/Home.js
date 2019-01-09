import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HomeHeader from './HomeHeader';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeHeader />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;