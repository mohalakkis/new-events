import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainBottomTabNavigator from './MainBottomTabNavigator';

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="MainTab" component={MainBottomTabNavigator} />
  </Drawer.Navigator>
);

export default MainDrawerNavigator;
