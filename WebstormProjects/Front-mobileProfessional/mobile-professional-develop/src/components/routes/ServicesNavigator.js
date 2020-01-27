import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Services from '../pages/Services';
import { TopTabTheme } from '../../constants/theme';

const Tab = createMaterialTopTabNavigator();

const ServicesNavigator = () => (
  <Tab.Navigator
    tabBarOptions={TopTabTheme}
  >
    <Tab.Screen name="Abilities" component={Services} />
    <Tab.Screen name="ServicePhotos" component={Services} />
  </Tab.Navigator>
);

export default ServicesNavigator;
