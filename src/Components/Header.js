import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Header extends React.Component {
  //前のスクリーンに戻るボタン
  handleBackButton() {
    this.props.navigation.goBack();
  }

  render() {
    const { children } = this.props;
    return (
      <View style={styles.container}>

        {/* バックボタン */}
        <TouchableOpacity
          style={styles.backButtonBox}
          onPress={() => { this.handleBackButton(); }}
        >
          <View style={styles.backButton}>
            <Icon name="chevron-left" style={styles.backButtonIcon} />
          </View>
        </TouchableOpacity>

        <Text style={styles.headerText}>
          {children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.13,
    width: '100%',
    height: Dimensions.get('window').height * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(219,0,76,0.70)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '900',
    paddingTop: '13%',
  },
  backButtonBox: {
    position: 'absolute',
    top: 40,
    left: 15,
    width: 50,
    height: 50,
  },
  backButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  backButtonIcon: {
    fontSize: 23,
    color: '#fff',
    marginTop: 15,
    marginLeft: 14,
  },
});


export default Header;
