import React from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
} from 'react-native';
import { observer, Provider } from 'mobx-react/native';
import Header from '../Components/Header';
import EachShopScreenMiddleComponent from '../Components/EachShopScreenMiddleComponent';
import RootStore from '../Stores/RootStore';

const rootStore = new RootStore();

@observer
class FavoriteShops extends React.Component {
  async componentDidMount() {
    try {
      await AsyncStorage.setItem('openingGenre', 'favorite')
        .then(() => {
          //
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <Provider store={rootStore}>
        <View style={styles.container}>
          <Header navigation={navigation}>お気に入り</Header>
          <EachShopScreenMiddleComponent navigation={navigation} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default FavoriteShops;