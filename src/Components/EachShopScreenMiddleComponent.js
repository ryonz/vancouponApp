import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Items from './Items';

@inject('store')
@observer
class EachShopScreenMiddleComponent extends React.Component {

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Items navigation={navigation} />
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

export default EachShopScreenMiddleComponent;
