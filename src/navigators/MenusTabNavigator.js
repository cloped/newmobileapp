/* eslint-disable react/prop-types */
import React from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';
import {
  createBottomTabNavigator,
} from 'react-navigation';

import Home from '../screens/Home/Home';
import ProfileNavigator from './ProfileNavigator';
// import Operations from '../screens/Operations';

const BottomNavigationShowcase = (props) => {
  const { navigation } = props;

  const onTabSelect = (selectedIndex) => {
    const { [selectedIndex]: selectedRoute } = navigation.state.routes;

    navigation.navigate(selectedRoute.routeName);
  };

  return (
    <BottomNavigation
      selectedIndex={navigation.state.index}
      onSelect={onTabSelect}
    >
      <BottomNavigationTab title='Home' />
      {/* <BottomNavigationTab title='Operações' /> */}
      <BottomNavigationTab title='Perfil' />
    </BottomNavigation>
  );
};

const TabNavigatorScreen = createBottomTabNavigator(
  {
    Home,
    // Operations,
    ProfileNavigator,
  }, {
    initialRouteName: 'Home',
    tabBarComponent: BottomNavigationShowcase,
  },
);

export default TabNavigatorScreen;
