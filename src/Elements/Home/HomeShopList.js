import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Image,
} from 'react-native';
import { isiPhoneEight, isiPhoneSE } from '../../lib/windowsize';

const listImageSource = {
  food: require('../../../assets/Images/Home/HomeListImageFood.jpg'),
  shop: require('../../../assets/Images/Home/HomeListImageShop.jpg'),
  beauty: require('../../../assets/Images/Home/HomeListImageBeauty.jpg'),
  sightseeing: require('../../../assets/Images/Home/HomeListImageSightseeing.jpg'),
  hospital: require('../../../assets/Images/Home/HomeListItemImageHospital.jpg'),
  entertainment: require('../../../assets/Images/Home/HomeListImageEntertainment.jpg'),
  other: require('../../../assets/Images/Home/HomeListImageOther.jpg'),
};

const shopLists = [
  { genre: '飲食', image: listImageSource.food },
  { genre: 'お店', image: listImageSource.shop },
  { genre: '美容', image: listImageSource.beauty },
  { genre: '観光', image: listImageSource.sightseeing },
  { genre: 'エンタメ', image: listImageSource.entertainment },
  { genre: '病院', image: listImageSource.hospital },
  { genre: 'その他', image: listImageSource.other },
];

class HomeShopList extends React.Component {
  renderShopList() {
    return shopLists.map((value, index) => {
      const { navigate } = this.props.navigation;
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            if (value.genre === '飲食') {
              navigate('EachShopGenreScreen', 'food');
              try {
                AsyncStorage.setItem('openingGenre', 'food');
              } catch (error) {
                console.log(error);
              }
            } else if (value.genre === 'お店') {
              navigate('EachShopGenreScreen', 'shop');
              try {
                AsyncStorage.setItem('openingGenre', 'shop');
              } catch (error) {
                console.log(error);
              }
            } else if (value.genre === '美容') {
              navigate('EachShopGenreScreen', 'beauty');
              try {
                AsyncStorage.setItem('openingGenre', 'beauty');
              } catch (error) {
                console.log(error);
              }
            } else if (value.genre === '観光') {
              navigate('EachShopGenreScreen', 'sightseeing');
              try {
                AsyncStorage.setItem('openingGenre', 'sightseeing');
              } catch (error) {
                console.log(error);
              }
            } else if (value.genre === 'エンタメ') {
              navigate('EachShopGenreScreen', 'entertainment');
              try {
                AsyncStorage.setItem('openingGenre', 'entertainment');
              } catch (error) {
                console.log(error);
              }
            } else if (value.genre === '病院') {
              navigate('EachShopGenreScreen', 'hospital');
              try {
                AsyncStorage.setItem('openingGenre', 'hospital');
              } catch (error) {
                console.log(error);
              }
            } else if (value.genre === 'その他') {
              navigate('EachShopGenreScreen', 'other');
              try {
                AsyncStorage.setItem('openingGenre', 'other');
              } catch (error) {
                console.log(error);
              }
            }
          }}
        >
          <View style={styles.shopListBox}>
            <Image
              source={value.image}
              style={styles.shopListImage}
            />
            <View style={styles.shopListTextBox}>
              <Text
                style={
                value.genre.length === 2 ? styles.shopListText
                  : value.genre.length === 3 ? styles.shopListTextLength3
                    : styles.shopListTextLength4}
              >
                {value.genre}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.shopListQuestionTextBox}>
          <Text style={styles.shopListQuestionText}>
            どんなクーポンをお探しですか？
          </Text>
        </View>
        <ScrollView
          horizontal
        >
          {this.renderShopList()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
  },
  shopListBox: {
    width: '37%',
    height: 105,
    marginTop: isiPhoneEight() ? 10 : isiPhoneSE() ? 15 : 30,
    marginLeft: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
  },
  shopListImage: {
    width: isiPhoneSE() ? 110 : 140,
    height: isiPhoneSE() ? 90 : 120,
    borderRadius: 4,
  },
  shopListTextBox: {
    position: 'absolute',
    top: isiPhoneSE() ? '32%' : '44%',
    left: '0%',
    width: isiPhoneSE() ? 110 : 140,
    paddingTop: '3%',
    paddingBottom: '2%',
    backgroundColor: 'rgba(111,111,111,0.8)',

  },
  shopListText: {
    fontSize: isiPhoneSE() ? 20 : 25,
    fontWeight: '900',
    color: '#fff',
    paddingLeft: '33%',
  },
  shopListTextLength3: {
    fontSize: isiPhoneSE() ? 20 : 25,
    fontWeight: '900',
    color: '#fff',
    paddingLeft: '25%',
  },
  shopListTextLength4: {
    fontSize: isiPhoneSE() ? 20 : 25,
    fontWeight: '900',
    color: '#fff',
    paddingLeft: '18%',
  },
  shopListQuestionTextBox: {
    width: '100%',
    marginLeft: 16,
    paddingTop: '5%',
  },
  shopListQuestionText: {
    fontSize: isiPhoneSE() ? 15 : 20,
    fontWeight: '900',
  },
});

export default HomeShopList;
