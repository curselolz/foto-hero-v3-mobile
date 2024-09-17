import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import Slide1 from '../../screens/Intro/Slide1';
import Slide2 from '../../screens/Intro/Slide2';
import Slide3 from '../../screens/Intro/Slide3';

export type IntroStackParamList = {
  Slide1: undefined;
  Slide2: undefined;
  Slide3: undefined;
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const Stack = createStackNavigator<IntroStackParamList>();

export const IntroStack: React.FC = () => (
  <Stack.Navigator initialRouteName="Slide1" screenOptions={screenOptions}>
    <Stack.Screen name="Slide1" component={Slide1} />
    <Stack.Screen name="Slide2" component={Slide2} />
    <Stack.Screen name="Slide3" component={Slide3} />
  </Stack.Navigator>
);
