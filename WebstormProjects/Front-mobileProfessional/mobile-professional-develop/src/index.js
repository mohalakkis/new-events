import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import theme from './constants/theme';
import MainStackNavigator from './components/routes/MainStackNavigator';

const App = () => (
  <ThemeProvider theme={theme}>
    <NavigationNativeContainer>
      <MainStackNavigator />
    </NavigationNativeContainer>
  </ThemeProvider>
);

export default App;
