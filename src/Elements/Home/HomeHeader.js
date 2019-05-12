import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

class HomeHeader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.homeHeaderImage}
          source={require('../../../assets/Images/Home/HomeHeaderImage1024_683.jpg')}
        />
        <View style={styles.homeHeaderTitleBox}>
          <Text style={styles.homeHeaderTitle}>
            クーポンを使って
            {'\n'}
            バンクーバーを楽しもう！
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: '100%',
  },
  homeHeaderImage: {
    height: '100%',
    width: '100%',
  },
  homeHeaderTitleBox: {
    position: 'absolute',
    width: '85.33%',
    height: 87,
    top: '43.6%',
    paddingLeft: '4.26%',
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