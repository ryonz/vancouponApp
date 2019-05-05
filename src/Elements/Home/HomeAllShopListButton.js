import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

class HomeAllShopListButton extends React.Component {
  async handleOnPressNavigation() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    try {
      await AsyncStorage.setItem('openingGenre', 'allShop')
        .then((openingGenreValue) => {
          console.log(openingGenreValue);
          navigation.navigate('EachShopGenreScreen', 'allShop');
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
            お店一覧
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
    height: 42,
    borderRadius: 6,
    alignItems: 'center',
    borderColor: '#707070',
    borderWidth: 0.5,
    marginLeft: 4,
    marginRight: 4,
  },
  buttonTitleText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#707070',
    paddingTop: '3%',
  },
});


export default HomeAllShopListButton;