import React from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  View,
} from 'react-native';
import GeneralScreenComponent from '../Components/GeneralScreenComponent';


class Restaurant extends React.Component {
  state = {
    headerTitle: '飲食',
    restaurantList: [],
  }

  // //database内のレストランリストをStateに格納する。
  // componentWillMount() {
  //   const databaseGenreRestaurantRef = firebase.database().ref('restaurant/');
  //   databaseGenreRestaurantRef.on('value', (snapshot) => {
  //     snapshot.forEach(() => {
  //       let num = 1;
  //       console.log(snapshot.val());
  //       num ++;
  //     })
  //     //console.log(snapshot.val());
  //   });
  // }

  // componentWillMount() {
  //   const databaseGenreRestaurantRef = firebase.database().ref('restaurant/');
  //   databaseGenreRestaurantRef.on('value', (snapshot) => {
  //     snapshot.forEach(() => {
  //       let num = 0;
  //       let restaurantNum = 'restaurant' + num;
  //       const restaurantList = [];
  //       restaurantList.push(snapshot.val());
  //       this.setState({ restaurantList });
  //       num ++;
  //       console.log(restaurantList);
  //     });
  //   });
  // }

  render() {
    const { headerTitle } = this.state;
    //console.log(this.state.restaurantList);
    return (
      <View style={styles.container}>
        <GeneralScreenComponent headerTitle={headerTitle} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Restaurant;