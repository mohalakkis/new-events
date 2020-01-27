import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainDrawerNavigator from './MainDrawerNavigator';
import { colors } from '../../constants/theme';

const Stack = createStackNavigator();

const MainStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'white',
      headerStyle: { backgroundColor: colors.base },
    }}
  >
    <Stack.Screen name="MainDrawer" component={MainDrawerNavigator} />
  </Stack.Navigator>
);

export default MainStackNavigator;
