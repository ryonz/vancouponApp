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
import { SQLite } from 'expo';
import { inject, observer } from 'mobx-react/native';
import { Image } from 'react-native-elements';

const db = SQLite.openDatabase('db.db');

@inject('store')
@observer
class Items extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      noImage: require('../../assets/Images/Images/noImage.001.jpeg'),
      openingGenreValue: '',
      itemsArray: [],
      allShopsArray: {
        restaurantStoreItems: [],
        shopStoreItems: [],
      }
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
    console.log(this.props.navigation.state.routeName);

    await AsyncStorage.getItem('openingGenre')
      .then((openingGenreValue) => {
        console.log(openingGenreValue);
        this.setState({ openingGenreValue: openingGenreValue });
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
          } else if (openingGenreValue === 'allCoupon') {
            restaurantStore.handleFirestoreCollectionOfFoods();
            shopStore.handleFirestoreCollectionOfShop();
            beautyStore.handleFirestoreCollectionOfBeauty();
            sightseeingStore.handleFirestoreCollectionOfSightseeing();
            entertainmentStore.handleFirestoreCollectionOfEntertainment();
            hospitalStore.handleFirestoreCollectionOfHospital();
            othersStore.handleFirestoreCollectionOfOthers();
          } else if (openingGenreValue === 'allShop') {
            restaurantStore.handleFirestoreCollectionOfFoods();
            shopStore.handleFirestoreCollectionOfShop();
            beautyStore.handleFirestoreCollectionOfBeauty();
            sightseeingStore.handleFirestoreCollectionOfSightseeing();
            entertainmentStore.handleFirestoreCollectionOfEntertainment();
            hospitalStore.handleFirestoreCollectionOfHospital();
            othersStore.handleFirestoreCollectionOfOthers();
          } else {
            //予期せぬエラーが発生した場合
            Alert.alert('予期せぬ不具合が発生いたしました。再度お試し下さい');
          }
        } else if (this.props.navigation.state.routeName === 'Favorite') {
          restaurantStore.handleFirestoreCollectionOfFoods();
          shopStore.handleFirestoreCollectionOfShop();
          beautyStore.handleFirestoreCollectionOfBeauty();
          sightseeingStore.handleFirestoreCollectionOfSightseeing();
          entertainmentStore.handleFirestoreCollectionOfEntertainment();
          hospitalStore.handleFirestoreCollectionOfHospital();
          othersStore.handleFirestoreCollectionOfOthers();
        }
      });
    //SQLiteでTable「favoriteItems」作成,カラムにはIDとValueを設定
    db.transaction((tx) => {
      tx.executeSql(
        `create table if not exists favoriteItems(id integer primary key not null);`,
        null,
        () => { console.log('suc'); },
        () => { console.log('error'); },
      );
    });
    //現在のスクリーンの判定と、それに応じたストアの配列へのSET
    const currentScreen = this.props.navigation.state.routeName;
    AsyncStorage.getItem('openingGenre')
      .then((openingGenreValue) => {
        if (currentScreen === 'EachShopGenreScreen') {
          if (openingGenreValue === 'food') {
            //レストランとストア配列読み込み
            console.log(this.state.itemsArray, 'itemsArray');
            this.setState({ itemsArray: store.restaurantStore.Items });
            //items = store.restaurantStore.Items;
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
          } else if (openingGenreValue === 'allCoupon') {
            //
          } else if (openingGenreValue === 'allShop') {
            this.setState({ allShopsArray: { restaurantStoreItems: store.restaurantStore.Items, shopStoreItems: store.shopStore.Items } });
          } else {
            //Alert.alert('予期せぬ不具合が発生いたしました。再度お試し下さい');
          }
        } else if (currentScreen === 'Favorite') {
          db.transaction((tx) => {
            tx.executeSql(
              `select * from favoriteItems;`,
              null,
              () => {},
              () => { console.log('error'); },
            );
          });
        }
      });
  }


  componentWillUnmounted() {
    this.setState({ itemsArray: null });
  }

  //お気に入り登録、削除処理
  handleLikeButton(value, array) {
    //SQliteへのお気に入りIDの追加と削除
    db.transaction((tx) => {
      tx.executeSql(
        `insert into favoriteItems (id) values (${value.id});`,
        null,
        () => { console.log('insert suc'); },
        () => {
          tx.executeSql(
            `delete from favoriteItems where id = ${value.id}`,
            null,
            () => { console.log('delete id suc'); },
            (error) => { console.log(error); },
          );
        },
      );
    });
  }

  //
  handleLikeImage(name) {
    const checkFavorite = AsyncStorage.getItem(`${name}.favorite`);
    if (checkFavorite === 'true') {
      return (
        <Image
          source={require('../../assets/Images/Icons/likeRed.png')}
          style={styles.likeButton}
        />
      );
    }
    if (checkFavorite !== 'true') {
      return (
        <Image
          source={require('../../assets/Images/Icons/like.png')}
          style={styles.likeButton}
        />
      );
    }
  }

  shopModalHandler(value) {
    //console.log(value);
    const { navigate } = this.props.navigation;
    navigate('ShopModal', { value });
  }

  //Storeから取得した各ショップデータの配列をレンダリング
  renderItemBox() {
    console.log(`renderItemBox is ${this.state.openingGenreValue}`);
    if (this.state.openingGenreValue === 'allCoupon') {
      //
    } else if (this.state.openingGenreValue === 'allShop') {
      const { allShopsArray } = this.state;
      const arrayConcat = allShopsArray.restaurantStoreItems.concat(allShopsArray.shopStoreItems);
      console.log(arrayConcat);
      return arrayConcat.map((value, index) => (
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
                onPress={() => { this.handleLikeButton(value); }}
              >
                {this.handleLikeImage(value.name)}
              </TouchableOpacity>
  
            </View>
          </View>
  
        </TouchableOpacity>
      ));
    } else if (this.state.openingGenreValue !== 'allCoupon' && 'allShop') {
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
                onPress={() => { this.handleLikeButton(value); }}
              >
                {this.handleLikeImage(value.name)}
              </TouchableOpacity>
  
            </View>
          </View>
  
        </TouchableOpacity>
      ));
    }
  }

  render() {
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


// id,
// name,
// catchCopy,
// couponType,
// couponTag,
// genreTag,
// shortDescription,
// longDescription,
// address,
// latitude,
// longitude,
// time0,
// time1,
// time2,
// time3,
// time4,
// time5,
// time6,
// facebook,
// instagram,
// twitter,
// mainImageUrl,
// note1,
// note2,
// note3,
// note4,
// phoneNumber,
// qrcodeUrl,
// webPage
// )
// values (
// ${value.id},
// ${value.name},
// ${value.catchCopy},
// ${value.couponType},
// ${value.couponTag},
// ${value.genreTag},
// ${value.shortDescription},
// ${value.longDescription},
// ${value.address},
// ${value.latitude},
// ${value.longitude},
// ${value.time0},
// ${value.time1},
// ${value.time2},
// ${value.time3},
// ${value.time4},
// ${value.time5},
// ${value.time6},
// ${value.facebook},
// ${value.instagram},
// ${value.twitter},
// ${value.mainImageUrl},
// ${value.note1},
// ${value.note2},
// ${value.note3},
// ${value.note4},
// ${value.phoneNumber},
// ${value.qrcodeUrl},
// ${value.webPage}