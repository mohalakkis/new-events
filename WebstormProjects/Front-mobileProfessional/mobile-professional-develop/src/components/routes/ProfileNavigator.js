import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from '../pages/Profile';
import ProfilePassword from '../pages/ProfilePassword';
import ProfileAddress from '../pages/ProfileAddress';
import ProfileBank from '../pages/ProfileBank';
import { TopTabTheme } from '../../constants/theme';

const Tab = createMaterialTopTabNavigator();

const ProfileNavigator = () => (
  <Tab.Navigator
    tabBarOptions={TopTabTheme}
  >
    <Tab.Screen
      name="profile"
      component={Profile}
      options={{
        tabBarLabel: 'PERFIL',
      }}
    />
    <Tab.Screen
      name="ProfilePassword"
      component={ProfilePassword}
      options={{
        tabBarLabel: 'SENHA',
      }}
    />
    <Tab.Screen
      name="address"
      component={ProfileAddress}
      options={{
        tabBarLabel: 'ENDEREÇO',
      }}
    />
    <Tab.Screen
      name="ProfileBank"
      component={ProfileBank}
      options={{
        tabBarLabel: 'BANCO',
      }}
    />
  </Tab.Navigator>
);

export default ProfileNavigator;
