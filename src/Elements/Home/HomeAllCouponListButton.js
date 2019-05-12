import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { isiPhoneEight, isiPhoneSE } from '../../lib/windowsize';

class HomeAllCouponListButton extends React.Component {
  async handleOnPressNavigation() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    try {
      await AsyncStorage.setItem('openingGenre', 'allCoupon')
        .then((openingGenreValue) => {
          console.log(openingGenreValue);
          navigation.navigate('EachShopGenreScreen', 'allCoupon');
        });
    } catch (error) {
      console.log(error);
    }
  }

  renderButton() {
    return (
      <TouchableOpacity
        onPress={() => { this.handleOnPressNavigation(); }}
      >
        <View style={styles.buttonBox}>
          <Text style={styles.buttonTitleText}>
            クーポン一覧
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.077,
    justifyContent: 'center',
    width: '100%',
  },
  buttonBox: {
    width: '98%',
    height: isiPhoneSE() ? 30 : 42,
    borderRadius: 6,
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 0.5,
    marginLeft: 4,
    marginRight: 4,
    marginTop: isiPhoneEight() ? 30 : 0,
  },
  buttonTitleText: {
    fontSize: isiPhoneSE() ? 13 : 16,
    fontWeight: '800',
    color: '#707070',
    paddingTop: isiPhoneSE() ? '2%' : '3%',
  },
});

export default HomeAllCouponListButton;
