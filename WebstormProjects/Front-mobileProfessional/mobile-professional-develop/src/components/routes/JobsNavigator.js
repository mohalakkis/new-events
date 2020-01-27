import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Jobs from '../pages/Jobs';
import { TopTabTheme } from '../../constants/theme';

const Tab = createMaterialTopTabNavigator();

const JobsNavigator = () => (
  <Tab.Navigator
    tabBarOptions={TopTabTheme}
  >
    <Tab.Screen name="Location" component={Jobs} />
    <Tab.Screen name="Transportation" component={Jobs} />
    <Tab.Screen name="Public" component={Jobs} />
    <Tab.Screen name="JobSchedule" component={Jobs} />
  </Tab.Navigator>
);

export default JobsNavigator;
