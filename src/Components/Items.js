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
import firebase from 'firebase';
import { inject, observer } from 'mobx-react/native';

@inject('store')
@observer
class Items extends React.Component {
  state = {
    like: false,
    items: [],
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection('foods')
      .get()
      .then((snapshot) => {
        const items = [];
        snapshot.forEach((doc) => {
          const docId = doc.id;
          const docData = doc.data();
          items.push(docData);
          console.log(docData);
        });
        this.setState({ items });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleLikeButton() {
    const { like } = this.state;
    if (like === false) {
      this.setState({ like: true });
    } else {
      this.setState({ like: false });
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

  renderItemBox() {
    const items = this.state.items;
    return items.map((value, index) => {
      const { store } = this.props;
      const { restaurantStore } = store;
      return (
        <TouchableOpacity key={index}>
          <View style={styles.itemsBox}>
            <View style={styles.itemsImageBox}>
              <Image
                source={require('../../assets/Images/Home/HomeListImageShop.jpg')}
                style={styles.itemsImage}
              />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.itemsName}>
                {items[index].name}
              </Text>
              <Text style={styles.itemsTag}>
                {items[index].tag}
              </Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.itemsDescription}>
                {items[index].shortDescription}
              </Text>
              <TouchableOpacity
                style={styles.likeButtonBox}
                onPress={this.handleLikeButton.bind(this)}
              >
                {this.handleLikeImage()}
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      );
    });
  }

  render() {
    console.log(this.items);
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
});

export default Items;
