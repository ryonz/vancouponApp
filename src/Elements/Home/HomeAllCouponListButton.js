import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class HomeAllCouponListButton extends React.Component {
  renderButton() {
    return (
      <TouchableOpacity>
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
    height: 42,
    borderRadius: 8,
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

export default HomeAllCouponListButton;