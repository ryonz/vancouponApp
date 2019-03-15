import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { observer, inject } from 'mobx-react/native';

const listImageSource = {
  food: require('../../../assets/Images/Home/HomeListImageFood.jpg'),
  shop: require('../../../assets/Images/Home/HomeListImageShop.jpg'),
  beauty: require('../../../assets/Images/Home/HomeListImageBeauty.jpg'),
  sightseeing: require('../../../assets/Images/Home/HomeListImageSightseeing.jpg'),
};

const shopLists = [
  { genre: '飲食', image: listImageSource.food },
  { genre: 'お店', image: listImageSource.shop },
  { genre: '美容', image: listImageSource.beauty },
  { genre: '観光', image: listImageSource.sightseeing },
  { genre: 'エンタメ', image: listImageSource.beauty },
  { genre: '病院', image: listImageSource.beauty },
  { genre: 'その他', image: listImageSource.beauty },
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
            } else if (value.genre === 'お店') {
              navigate('EachShopGenreScreen', 'shop');
            } else if (value.genre === '美容') {
              navigate('EachShopGenreScreen', 'beauty');
            } else if (value.genre === '観光') {
              navigate('EachShopGenreScreen', 'sightseeing');
            } else if (value.genre === 'エンタメ') {
              navigate('EachShopGenreScreen', 'entertainment');
            } else if (value.genre === '病院') {
              navigate('EachShopGenreScreen', 'hospital');
            } else if (value.genre === 'その他') {
              navigate('EachShopGenreScreen', 'other');
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
          <Text style={styles.shopListQuestionText}>どんなクーポンをお探しですか？</Text>
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
    width: 140,
    height: 105,
    marginTop: 30,
    marginLeft: 16,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.8,
  },
  shopListImage: {
    width: 140,
    height: 120,
    borderRadius: 4,
  },
  shopListTextBox: {
    position: 'absolute',
    top: '44%',
    left: '0%',
    width: 140,
    paddingTop: '3%',
    paddingBottom: '2%',
    backgroundColor: 'rgba(111,111,111,0.8)',

  },
  shopListText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
    paddingLeft: '33%',
  },
  shopListTextLength3: {
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
    paddingLeft: '25%',
  },
  shopListTextLength4: {
    fontSize: 25,
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
    fontSize: 20,
    fontWeight: '900',
  },
});

export default HomeShopList;
