import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class HomeHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.homeHeaderImage}
          source ={require('../../../assets/Images/Home/HomeHeaderImage1024_683.jpg')}
        />
        <View style={styles.homeHeaderTitleBox}>
          <Text style={styles.homeHeaderTitle}>
            クーポンを使って
            {'\n'}
            バンクーバーを楽しもう！
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
  homeHeaderImage: {
    height: '50%',
    width: '100%',
  },
  homeHeaderTitleBox: {
    position: 'absolute',
    width: 320,
    height: 87,
    top: 175,
    paddingLeft: 16,
  },
  homeHeaderTitle: {
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
    lineHeight: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 8,
  },
});

export default HomeHeader;