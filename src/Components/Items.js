import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  ActivityIndicator,
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Image } from 'react-native-elements';

@inject('store')
@observer
class Items extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      noImage: require('../../assets/Images/Images/noImage.001.jpeg'),
      itemsArray: [],
    };
  }

  async componentDidMount() {
    const { store } = this.props;
    const restaurantStore = store.restaurantStore;
    const beautyStore = store.beautyStore;
    const shopStore = store.shopStore;
    const sightseeingStore = store.sightseeingStore;
    const entertainmentStore = store.entertainmentStore;
    const hospitalStore = store.hospitalStore;
    const othersStore = store.othersStore;
    //await restaurantStore.handleFirestoreCollectionOfFoods();
    console.log(this.props.navigation.state.routeName);

    await AsyncStorage.getItem('openingGenre')
      .then((openingGenreValue) => {
        console.log(openingGenreValue);
        if (this.props.navigation.state.routeName === 'EachShopGenreScreen') {
          if (openingGenreValue === 'food') {
            //開いてるページが飲食の場合
            restaurantStore.handleFirestoreCollectionOfFoods();
          } else if (openingGenreValue === 'shop') {
            //開いているページがショップの場合
            shopStore.handleFirestoreCollectionOfShop();
          } else if (openingGenreValue === 'beauty') {
            //開いているページが美容の場合
            beautyStore.handleFirestoreCollectionOfBeauty();
          } else if (openingGenreValue === 'sightseeing') {
            //開いているページが観光の場合
            sightseeingStore.handleFirestoreCollectionOfSightseeing();
          } else if (openingGenreValue === 'entertainment') {
            //開いてるページがエンタメの場合
            entertainmentStore.handleFirestoreCollectionOfEntertainment();
          } else if (openingGenreValue === 'hospital') {
            //開いてるページが病院の場合
            hospitalStore.handleFirestoreCollectionOfHospital();
          } else if (openingGenreValue === 'other') {
            //開いてるページがその他の場合
            othersStore.handleFirestoreCollectionOfOthers();
          } else {
            //予期せぬエラーが発生した場合
            Alert.alert('予期せぬ不具合が発生いたしました。再度お試し下さい');
          }
        } else if (this.props.navigation.state.routeName === 'Favorite') {
          //お気に入りページの際の読み込み処理
        }
      });
  }

  //お気に入り登録、削除処理
  handleLikeButton(name) {
    const { like } = this.state;
    if (like === false) {
      this.setState({ like: true });
      AsyncStorage.setItem(`${name}`, '1');
    } else {
      this.setState({ like: false });
      AsyncStorage.removeItem(`${name}`);
    }
  }

  handleLikeImage() {
    const { like } = this.state;
    if (like === true) {
      return (
        <Image
          source={require('../../assets/Images/Icons/likeRed.png')}
          style={styles.likeButton}
        />
      );
    }
    return (
      <Image
        source={require('../../assets/Images/Icons/like.png')}
        style={styles.likeButton}
      />
    );
  }

  shopModalHandler(value) {
    //console.log(value);
    const { navigate } = this.props.navigation;
    navigate('ShopModal', { value });
  }

  renderItemBox() {
    const { store } = this.props;
    const currentScreen = this.props.navigation.state.routeName;
    //const items = store.restaurantStore.Items;
    AsyncStorage.getItem('openingGenre')
      .then((openingGenreValue) => {
        if (currentScreen === 'EachShopGenreScreen') {
          if (openingGenreValue === 'food') {
            //レストランとストア配列読み込み
            this.setState({ itemsArray: store.restaurantStore.Items });
          } else if (openingGenreValue === 'shop') {
            //ショップのストア配列読み込み
            this.setState({ itemsArray: store.shopStore.Items });
          } else if (openingGenreValue === 'beauty') {
            //ビューティのストア配列読み込み
            this.setState({ itemsArray: store.beautyStore.Items });
          } else if (openingGenreValue === 'sightseeing') {
            //観光ストアの配列読み込み
            this.setState({ itemsArray: store.sightseeingStore.Items });
          } else if (openingGenreValue === 'entertainment') {
            //エンタメストアの配列読み込み
            this.setState({ itemsArray: store.entertainmentStore.Items });
          } else if (openingGenreValue === 'hospital') {
            //病院ストアの配列読み込み
            this.setState({ itemsArray: store.hospitalStore.Items });
          } else if (openingGenreValue === 'other') {
            //その他ストアの配列読み込み
            this.setState({ itemsArray: store.othersStore.Items });
          } else {
            Alert.alert('予期せぬ不具合が発生いたしました。再度お試し下さい');
          }
        } else if (currentScreen === 'Favorite') {
          ///
        }
      });
    return this.state.itemsArray.map((value, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => { this.shopModalHandler(value); }}
      >
        <View style={styles.itemsBox}>
          <View style={styles.itemsImageBox}>
            <Image
              source={!value.mainImageUrl ? this.state.noImage : { uri: value.mainImageUrl }}
              style={styles.itemsImage}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.itemsName}>
              {value.name}
            </Text>
            <Text style={styles.itemsTag}>
              {value.tag}
            </Text>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.itemsDescription}>
              {value.shortDescription}
            </Text>

            {/* Likeボタン */}
            <TouchableOpacity
              style={styles.likeButtonBox}
              onPress={() => { this.handleLikeButton(value.name); }}
            >
              {this.handleLikeImage()}
            </TouchableOpacity>

          </View>
        </View>

      </TouchableOpacity>
    ));
  }


  render() {
    //const { modalVisible } = this.state;
    // if (this.props.store.restaurantStore.Items.length  ) {
    //   return <View/>
    // }
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {this.renderItemBox()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
  },
  itemsBox: {
    width: (Dimensions.get('window').width - 20) / 2,
    height: 223,
    borderWidth: 0.2,
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 5,
    overflow: 'hidden',
  },
  itemsImageBox: {
    height: 149,
    marginBottom: 11,
  },
  itemsImage: {
    width: '100%',
    height: '100%',
  },
  itemsName: {
    fontSize: 16,
    color: '#707070',
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 5,
    paddingLeft: 1,
  },
  itemsTag: {
    fontSize: 9,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: '#BCB8B8',
    paddingTop: 4,
    paddingLeft: 4,
    paddingRight: 4,
  },
  itemsDescription: {
    width: '65%',
    height: '90%',
    fontSize: 9,
    color: '#707070',
    paddingTop: 5,
    paddingLeft: 10,
  },
  likeButtonBox: {
    paddingTop: 10,
    paddingLeft: '14%',
  },
  likeButton: {
    width: 18,
    height: 18,
  },
  shopModalView: {
    position: 'absolute',
  },
});

export default Items;
