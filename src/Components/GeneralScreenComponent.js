import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './Header';
import GeneralScreenItems from './GeneralScreenItems';

class GeneralScreenComponent extends React.Component {
  render() {
    const { headerTitle } = this.props;
    return (
      <View style={styles.container}>
        <Header>{headerTitle}</Header>
        <GeneralScreenItems />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
});

export default GeneralScreenComponent;