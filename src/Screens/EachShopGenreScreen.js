import React from 'react';
import {
  StyleSheet,
  AsyncStorage,
  View,
} from 'react-native';
import { observer, Provider } from 'mobx-react/native';
import Header from '../Components/Header';
import EachShopScreenMiddleComponent from '../Components/EachShopScreenMiddleComponent';
import RootStore from '../Stores/RootStore';

const rootStore = new RootStore();

@observer
class EachShopGenreScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      headerTitle: '',
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    //const { store } = this.props;
    const { headerTitle } = this.state;
    if (params === 'food') {
      this.setState({ headerTitle: '飲食' });
    } else if (params === 'shop') {
      this.setState({ headerTitle: 'お店' });
    } else if (params === 'beauty') {
      this.setState({ headerTitle: '美容' });
    } else if (params === 'sightseeing') {
      this.setState({ headerTitle: '観光' });
    } else if (params === 'entertainment') {
      this.setState({ headerTitle: 'エンタメ' });
    } else if (params === 'hospital') {
      this.setState({ headerTitle: '病院' });
    } else if (params === 'other') {
      this.setState({ headerTitle: 'その他' });
    } else if (params === 'allCoupon') {
      this.setState({ headerTitle: 'クーポン一覧' });
    } else if (params === 'allShop') {
      this.setState({ headerTitle: 'お店一覧' });
    }
  }

  render() {
    const { headerTitle } = this.state;
    const { navigation } = this.props;
    return (
      <Provider store={rootStore}>
        <View style={styles.container}>
          <Header navigation={navigation}>{headerTitle}</Header>
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

export default EachShopGenreScreen;
