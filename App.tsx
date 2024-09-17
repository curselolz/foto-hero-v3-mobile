import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {registerRootComponent} from 'expo';
import {ThemeProvider, createTheme} from '@rneui/themed';

import {RootNavigator} from './src/navigation/NavigationContainer';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <SafeAreaProvider style={{flex: 1}}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <RootNavigator />
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

registerRootComponent(App);
export default App;
