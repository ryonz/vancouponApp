import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './src/Screens/Home';
import FavoriteShops from './src/Screens/FavoriteShops';
import Help from './src/Screens/Help';

const App = createBottomTabNavigator(
  {
    FavoriteShops: { screen: FavoriteShops },
    Home: {
      screen: Home,
      defaultNavigationOptions: {
        tabBarIcon: ({ tintColor }) => {
          <Icon name="home" size={25} color={tintColor}/>
        },
        title: 'Home',
      },
    },
    Help: { screen: Help },
  },
  {
    swipeEnabled: false, //Android用
    tabBarOptions: {
      activeTintColor: '#DE628D',
      inactiveTintColor: '#707070',
    },
  },
);

export default createAppContainer(App);


// defaultNavigationOptions: ({ navigation }) => ({
//   tabBarIcon: ({ tintColor }) => {
//     if (navigation.state.routerName === 'Home') {
//       <Icon name="chevron-right" style={{ width: 25, height: 25, tintColor: tintColor}}/>
//     } else if (navigation.state.routerName === 'Help') {
//       <Icon name="chevron-right" style={{ width: 25, height: 25, tintColor: tintColor}}/>
//     }
//   },
// }),