import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Screens/Home';

const App = createBottomTabNavigator({
  Home: { screen: Home },
});

export default createAppContainer(App);
