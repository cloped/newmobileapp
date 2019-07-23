import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login/Login';
import MenusTabNavigator from './MenusTabNavigator';

const AuthNavigator = createSwitchNavigator(
  {
    Login,
    MenusTabNavigator,
  },
  {
    // initialRouteName: 'Login',
    initialRouteName: 'MenusTabNavigator',
    backBehavior: 'none',
    header: null,
    headerMode: 'none',
  },
);

export default createAppContainer(AuthNavigator);
