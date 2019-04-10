import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
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
    };
  }

  async componentWillMount() {
    const { store } = this.props;
    const restaurantStore = store.restaurantStore;
    await restaurantStore.handleFirestoreCollectionOfFoods();

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

  shopModalHandler(value) {
    //console.log(value);
    const { navigate } = this.props.navigation;
    navigate('ShopModal', { value });
  }

  renderItemBox() {
    const { store } = this.props;
    const items = store.restaurantStore.Items;

    return items.map((value, index, array) => (
      <TouchableOpacity
        key={index}
        onPress={() => { this.shopModalHandler(value); }}
      >
        <View style={styles.itemsBox}>
          <View style={styles.itemsImageBox}>
            <Image
              source={{ uri: value.mainImageUrl }}
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
            <TouchableOpacity
              style={styles.likeButtonBox}
              onPress={this.handleLikeButton.bind(this)}
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
