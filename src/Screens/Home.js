import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../Elements/Home/HomeHeader';
import HomeShopList from '../Elements/Home/HomeShopList';
import HomeAllCouponListButton from '../Elements/Home/HomeAllCouponListButton';
import HomeAllShopListButton from '../Elements/Home/HomeAllShopListButton';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeHeader />
        <HomeShopList />
        <HomeAllCouponListButton />
        <HomeAllShopListButton />
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