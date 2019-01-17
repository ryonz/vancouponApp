import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
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
  { genre: 'エンタメ', image: listImageSorce.beauty },
  { genre: '病院', image: listImageSorce.beauty },
  { genre: 'その他', image: listImageSorce.beauty },
];

class HomeShopList extends React.Component {
  renderShopList() {
    return shopLists.map((value, index) => {
      return (
        <TouchableOpacity
          key={index}
          // onPress={onPress}
        >
          <View style={styles.shopListBox}>
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
      height: 2,
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
