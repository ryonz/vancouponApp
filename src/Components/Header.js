import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

class Header extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
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
});


export default Header;
