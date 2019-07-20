/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  BottomNavigation,
  BottomNavigationTab,
} from 'react-native-ui-kitten';
import {
  createBottomTabNavigator,
} from 'react-navigation';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

class BottomNavigationShowcase extends Component {
  onTabSelect = (selectedIndex) => {
    const { navigation } = this.props;
    const { [selectedIndex]: selectedRoute } = navigation.state.routes;

    navigation.navigate(selectedRoute.routeName);
  };

  render() {
    const { navigation } = this.props;

    return (
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={this.onTabSelect}
      >
        <BottomNavigationTab title='Home' />
        <BottomNavigationTab title='Perfil' />
      </BottomNavigation>
    );
  }
};

const TabNavigatorScreen = createBottomTabNavigator(
  {
    Home,
    Profile,
  }, {
    initialRouteName: 'Home',
    tabBarComponent: BottomNavigationShowcase,
  },
);

export default TabNavigatorScreen;
