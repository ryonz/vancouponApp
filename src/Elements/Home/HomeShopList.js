import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  Image,
} from 'react-native';

const listImageSorce = {
  food: require('../../../assets/Images/Home/HomeListImageFood.jpg'),
  shop: require('../../../assets/Images/Home/HomeListImageShop.jpg'),
  beauty: require('../../../assets/Images/Home/HomeListImageBeauty.jpg'),
  sightseeing: require('../../../assets/Images/Home/HomeListImageSightseeing.jpg'),
};

const shopLists = [
  { genre: '飲食', image: listImageSorce.food },
  { genre: 'お店', image: listImageSorce.shop },
  { genre: '美容', image: listImageSorce.beauty },
  { genre: '観光', image: listImageSorce.sightseeing },
  // { genre: 'エンタメ', image: '' },
  // { genre: '病院', image: '' },
  // { genre: 'その他', image: '' },
];

class HomeShopList extends React.Component {
  renderShopList() {
    return shopLists.map((value, index) => {
      return (
        <View
          key={index}
          style={styles.shopListBox}
        >
          <Image
            source={value.image}
            style={styles.shopListImage}
          />
          <View style={styles.shopListTextBox}>
            <Text style={styles.shopListText}>
              {value.genre}
            </Text>
          </View>
        </View>
      );
    });
  }

  render() {
    return (
      <View style={styles.container}>
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
    flex: 0.2,
    backgroundColor: 'gray',
  },
  shopListBox: {
    width: 140,
    height: 105,
    backgroundColor: 'red',
    marginTop: '9%',
  },
  shopListImage: {
    width: 140,
    height: 105,
    marginLeft: '12%',
  },
  shopListTextBox: {
    position: 'absolute',
    top: '26%',
    left: '12%',
    width: 140,
    paddingTop: '2%',
    paddingBottom: '2%',
    backgroundColor: 'rgba(111,111,111,0.8)',

  },
  shopListText: {
    fontSize: 25,
    fontWeight: '900',
    color: '#fff',
    paddingLeft: '28%',
  },
});

export default HomeShopList;
