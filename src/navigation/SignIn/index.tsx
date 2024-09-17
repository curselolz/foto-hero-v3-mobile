import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {SignInScreen} from '../../screens/SignInScreen';

export type SignInStackParamList = {
  SignIn: undefined;
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const Stack = createStackNavigator<SignInStackParamList>();

export const SignInStack: React.FC = () => (
  <Stack.Navigator initialRouteName="SignIn" screenOptions={screenOptions}>
    <Stack.Screen name="SignIn" component={SignInScreen} />
  </Stack.Navigator>
);
