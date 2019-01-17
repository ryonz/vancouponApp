import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(219,0,76,0.70)',
    width: '100%',
    marginBottom: 20,
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
