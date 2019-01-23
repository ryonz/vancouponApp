import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const items = [
  { num: 0, name: 'コンビニ屋', tag: 'ショッピング', shortDescription: '＄10以上のお買い上げでスタンプ１個', image: '' },
  { num: 1, name: 'コンビニ屋', tag: 'ショッピング', shortDescription: '＄10以上のお買い上げでスタンプ１個', image: '' },
  { num: 2, name: 'コンビニ屋', tag: 'ショッピング', shortDescription: '＄10以上のお買い上げでスタンプ１個', image: '' },
  { num: 3, name: 'コンビニ屋', tag: 'ショッピング', shortDescription: '＄10以上のお買い上げでスタンプ１個', image: '' },
  { num: 4, name: 'コンビニ屋', tag: 'ショッピング', shortDescription: '＄10以上のお買い上げでスタンプ１個', image: '' },
];

class GeneralScreenItems extends React.Component {

  renderItemBox() {
    return items.map((value, index) => {
      return (
        <TouchableOpacity key={index}>
          <View style={styles.itemsBox}>
            <View style={styles.itemsImageBox}>
              <Image
                source={require('../../assets/Images/Home/HomeListImageShop.jpg')}
                style={styles.itemsImage}
              />
            </View>
            <View style={styles.itemsNameAndTagBox}>
              <Text style={styles.itemsName}>
                コンビニ屋
              </Text>
              <Text style={styles.itemsTag}>
                ショッピング
              </Text>
            </View>

            <Text style={styles.itemsDescription}>
               ＄10以上のお買い上げでスタンプ１個
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
      >
        {this.renderItemBox()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  itemsBox: {
    width: (Dimensions.get('window').width - 20) / 2,
    height: 223,
    borderWidth: 0.5,
    borderColor: '#707070',
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
  itemsNameAndTagBox: {
    flexDirection: 'row',
  },
  itemsName: {
    fontSize: 16,
    color: '#707070',
    fontWeight: 'bold',
    marginRight: 10,
    paddingLeft: 5,
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
    fontSize: 9,
    color: '#707070',
    padding: 5,
  },
});

export default GeneralScreenItems;