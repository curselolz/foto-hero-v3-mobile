import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {IntroStack} from './Intro';
import {OnBoardingStack} from './OnBoarding';
import {SignInStack} from './SignIn';
import {TabsNavigator} from './Tabs';

export type RootStackParamList = {
  IntroStack: undefined;
  OnBoardingStack: undefined;
  SignInStack: undefined;
  Tabs: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export const RootNavigator: React.FC = () => (
  <Stack.Navigator initialRouteName="IntroStack" screenOptions={screenOptions}>
    <Stack.Screen name="IntroStack" component={IntroStack} />
    <Stack.Screen name="OnBoardingStack" component={OnBoardingStack} />
    <Stack.Screen name="SignInStack" component={SignInStack} />
    <Stack.Screen name="Tabs" component={TabsNavigator} />
  </Stack.Navigator>
);
