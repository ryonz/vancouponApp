import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import ENV from './env.json';
import Home from './src/Screens/Home';
import FavoriteShops from './src/Screens/FavoriteShops';
import Help from './src/Screens/Help';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DATABASE_URL,
  projectId: ENV.FIREBASE_PROJECT_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_MESSAGING_SENDER_ID,
};
firebase.initializeApp(config);

const App = createBottomTabNavigator(
  {
    Favorite: {
      screen: FavoriteShops,
      navigationOptions: {
        tabBarLabel: 'お気に入り',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart" size={25} color={tintColor} />
        ),
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'ホーム',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={30} color={tintColor} />
        ),
      },
    },
    Help: {
      screen: Help,
      navigationOptions: {
        tabBarLabel: 'その他',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="bars" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    swipeEnabled: false, //Android用
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: '#DE628D',
      inactiveTintColor: '#707070',
      style: {
        width: '100%',
        height: 70,
      },
    },
  },
);

export default createAppContainer(App);
