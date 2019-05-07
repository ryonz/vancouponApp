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
        beautyStoreItems: [],
        sightseeingStoreItems: [],
        entertainmentStoreItems: [],
        hospitalStoreItems: [],
        othersStoreItems: [],
      },

      favoriteIDs: [],
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
    //console.log(this.props.navigation.state.routeName);

    await AsyncStorage.getItem('openingGenre')
      .then((openingGenreValue) => {
        console.log(`${openingGenreValue} AsyncStorage`);
        this.setState({ openingGenreValue });
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
            this.handleAllStoreFunction();
          } else if (openingGenreValue === 'allShop') {
            this.handleAllStoreFunction();
          } else {
            //予期せぬエラーが発生した場合
            Alert.alert('予期せぬ不具合が発生いたしました。再度お試し下さい');
          }
        } else if (this.props.navigation.state.routeName === 'Favorite') {
          this.handleAllStoreFunction();

          db.transaction((tx) => {
            tx.executeSql(
              `select id from favoriteItems where id is not null;`,
              null,
              (_, res) => {
                const IDs = [];
                const resultArray = res.rows._array;
                for (let i = 0; i < resultArray.length; i++) {
                  const ID = resultArray[i].id;
                  IDs.push(ID);
                }
                this.setState({ favoriteIDs: IDs });
                console.log(this.state.favoriteIDs);
              },
            );
          });
        }
      });
    //SQLiteでTable「favoriteItems」作成,カラムにはIDとValueを設定
    db.transaction((tx) => {
      tx.executeSql(
        `create table if not exists favoriteItems(id integer primary key not null, stateOfFavorite integer);`,
        null,
      );
    });
    //現在のスクリーンの判定と、それに応じたストアの配列へのSET
    const currentScreen = this.props.navigation.state.routeName;
    AsyncStorage.getItem('openingGenre')
      .then((openingGenreValue) => {
        if (currentScreen === 'EachShopGenreScreen') {
          if (openingGenreValue === 'food') {
            //レストランとストア配列読み込み
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
            this.handleSetStateToAllShopArray();
          } else if (openingGenreValue === 'allShop') {
            this.handleSetStateToAllShopArray();
          } else {
            //Alert.alert('予期せぬ不具合が発生いたしました。再度お試し下さい');
          }
        } else if (currentScreen === 'Favorite') {
          this.handleSetStateToAllShopArray();
        }
      });
  }

  //各ストアの関数をすべて発火
  handleAllStoreFunction() {
    const { store } = this.props;
    const restaurantStore = store.restaurantStore;
    const beautyStore = store.beautyStore;
    const shopStore = store.shopStore;
    const sightseeingStore = store.sightseeingStore;
    const entertainmentStore = store.entertainmentStore;
    const hospitalStore = store.hospitalStore;
    const othersStore = store.othersStore;

    restaurantStore.handleFirestoreCollectionOfFoods();
    shopStore.handleFirestoreCollectionOfShop();
    beautyStore.handleFirestoreCollectionOfBeauty();
    sightseeingStore.handleFirestoreCollectionOfSightseeing();
    entertainmentStore.handleFirestoreCollectionOfEntertainment();
    hospitalStore.handleFirestoreCollectionOfHospital();
    othersStore.handleFirestoreCollectionOfOthers();
  }

  //各ストアのアイテムをthis.state.allShopArrayのそれぞれのKeyに格納
  handleSetStateToAllShopArray() {
    const { store } = this.props;
    this.setState({ allShopsArray: {
      restaurantStoreItems: store.restaurantStore.Items,
      shopStoreItems: store.shopStore.Items,
      beautyStoreItems: store.beautyStore.Items,
      sightseeingStoreItems: store.sightseeingStore.Items,
      entertainmentStoreItems: store.entertainmentStore.Items,
      hospitalStoreItems: store.hospitalStore.Items,
      othersStoreItems: store.othersStore.Items,
    } });
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
        () => {},
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
    const { allShopsArray } = this.state;
    const arrayConcat = allShopsArray.restaurantStoreItems
      .concat(
        allShopsArray.shopStoreItems,
        allShopsArray.beautyStoreItems,
        allShopsArray.entertainmentStoreItems,
        allShopsArray.hospitalStoreItems,
        allShopsArray.othersStoreItems,
        allShopsArray.sightseeingStoreItems,
      );
    ///お気に入りItemのレンダリング
    if (this.props.navigation.state.routeName === 'Favorite') {
      const { favoriteIDs } = this.state;
      return arrayConcat.map((value, index) => {
        if (favoriteIDs.indexOf(value.id) >= 0) {
          return (
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
                  {/* ショップ名 */}
                  <View style={styles.itemsNameBox}>
                    <Text style={styles.itemsName}>
                      {value.name}
                    </Text>
                  </View>

                  {/* タグ */}
                  <View style={styles.rightSideItemsBox}>
                    <View style={styles.shopTagsBackground}>
                      <Text style={styles.itemsTag}>
                        {value.genreTag}
                      </Text>
                    </View>

                    {/* Likeボタン */}
                    <TouchableOpacity
                      style={styles.likeButtonBox}
                      onPress={() => { this.handleLikeButton(value); }}
                    >
                      {this.handleLikeImage(value.name)}
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

            </TouchableOpacity>
          );
        }
        if (favoriteIDs.indexOf(value.id) < 0) {
          return;
        }
      });
    }
    ///
    if (this.props.navigation.state.routeName === 'EachShopGenreScreen') {
      if (this.state.openingGenreValue === 'allCoupon') {
        return arrayConcat.map((value, index) => {
          if (value.couponTag) {
            return (
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
                    {/* ショップ名 */}
                    <View style={styles.itemsNameBox}>
                      <Text style={styles.itemsName}>
                        {value.name}
                      </Text>
                    </View>

                    {/* タグ */}
                    <View style={styles.rightSideItemsBox}>
                      <View style={styles.shopTagsBackground}>
                        <Text style={styles.itemsTag}>
                          {value.genreTag}
                        </Text>
                      </View>

                      {/* Likeボタン */}
                      <TouchableOpacity
                        style={styles.likeButtonBox}
                        onPress={() => { this.handleLikeButton(value); }}
                      >
                        {this.handleLikeImage(value.name)}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

              </TouchableOpacity>
            );
          }
        });
      } if (this.state.openingGenreValue === 'allShop') {
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
                {/* ショップ名 */}
                <View style={styles.itemsNameBox}>
                  <Text style={styles.itemsName}>
                    {value.name}
                  </Text>
                </View>

                <View style={styles.rightSideItemsBox}>
                  <View style={styles.shopTagsBackground}>
                    <Text style={styles.itemsTag}>
                      {value.genreTag}
                    </Text>
                  </View>

                  {/* Likeボタン */}
                  <TouchableOpacity
                    style={styles.likeButtonBox}
                    onPress={() => { this.handleLikeButton(value); }}
                  >
                    {this.handleLikeImage(value.name)}
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </TouchableOpacity>
        ));
      } if (this.state.openingGenreValue !== 'allCoupon' && 'allShop') {
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

                {/* ショップ名 */}
                <View style={styles.itemsNameBox}>
                  <Text style={styles.itemsName}>
                    {value.name}
                  </Text>
                </View>

                <View style={styles.rightSideItemsBox}>
                  <View style={styles.shopTagsBackground}>
                    <Text style={styles.itemsTag}>
                      {value.genreTag}
                    </Text>
                  </View>

                  {/* Likeボタン */}
                  <TouchableOpacity
                    style={styles.likeButtonBox}
                    onPress={() => { this.handleLikeButton(value); }}
                  >
                    {this.handleLikeImage(value.name)}
                  </TouchableOpacity>

                </View>
              </View>

            </View>

          </TouchableOpacity>
        ));
      }
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
  itemsNameBox: {
    width: '70%',
    height: '90%',
  },
  itemsName: {
    fontSize: 16,
    color: '#707070',
    fontWeight: 'bold',
    marginRight: 10,
    marginLeft: 5,
    paddingLeft: 1,
  },
  rightSideItemsBox: {
    width: '28%',
  },
  shopTagsBackground: {
    alignItems: 'center',
    backgroundColor: '#BCB8B8',
    borderWidth: 0.1,
    borderRadius: 4,
    marginLeft: 7,
    overflow: 'hidden',
  },
  itemsTag: {
    fontSize: 9,
    color: '#fff',
    backgroundColor: '#BCB8B8',
    fontWeight: 'bold',
    paddingTop: 0,
    margin: 3,
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
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: '17%',
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
