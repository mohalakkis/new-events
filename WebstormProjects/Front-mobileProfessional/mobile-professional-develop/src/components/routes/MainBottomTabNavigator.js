/* eslint-disable react/prop-types */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from '../pages/Home';
import Schedule from '../pages/Schedule';
import ServicesNavigator from './ServicesNavigator';
import JobsNavigator from './JobsNavigator';
import ProfileNavigator from './ProfileNavigator';
import { colors } from '../../constants/theme';

const Tab = createMaterialBottomTabNavigator();

const MainBottomTabNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#FFFFFF"
    inactiveColor={colors.light}
    barStyle={{ backgroundColor: colors.base }}
  >
    <Tab.Screen
      name="Schedule"
      component={Schedule}
      options={{
        tabBarLabel: 'Agenda',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="calendar" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Services"
      component={ServicesNavigator}
      options={{
        tabBarLabel: 'Serviços',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="toolbox" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Inicio',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Jobs"
      component={JobsNavigator}
      options={{
        tabBarLabel: 'Atendimentos',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={20} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={{
        tabBarLabel: 'Conta',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={20} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainBottomTabNavigator;
