import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeHeader from '../Elements/Home/HomeHeader';
import HomeShopList from '../Elements/Home/HomeShopList';
import HomeAllCouponListButton from '../Elements/Home/HomeAllCouponListButton';
import HomeAllShopListButton from '../Elements/Home/HomeAllShopListButton';

class Home extends React.Component {
  // //テスト用 リリース時には削除する
  // async componentDidMount() {
  //   await AsyncStorage.clear().then(() => { console.log('AsyncStorage all clear'); });
  // }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <HomeHeader />
        <HomeShopList navigation={navigation} />
        <HomeAllCouponListButton navigation={navigation} />
        <HomeAllShopListButton navigation={navigation} />
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
