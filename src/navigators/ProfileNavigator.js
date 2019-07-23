import { createStackNavigator, createAppContainer } from 'react-navigation';
import Profile, { profileNavigationOptions } from '../screens/Profile/Profile';

const ProfileNavigator = createStackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: profileNavigationOptions,
    },
  },
  {
    initialRouteName: 'Profile',
  },
);

export default createAppContainer(ProfileNavigator);
