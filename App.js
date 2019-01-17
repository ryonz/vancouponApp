import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/Screens/Home';
import Help from './src/Screens/Help';

const App = createBottomTabNavigator(
  {
    Help: { screen: Help },
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcons: ({focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#DE628D',
      inactiveTintColor: '#707070',
    },
  },
);

export default createAppContainer(App);
