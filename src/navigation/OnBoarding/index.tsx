import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import SelectGender from '../../screens/OnBoarding/SelectGender';
import UploadSelfie from '../../screens/OnBoarding/UploadSelfie';
import ChoosePlan from '../../screens/OnBoarding/ChoosePlan';
import Payment from '../../screens/OnBoarding/Payment';
import Timer from '../../screens/OnBoarding/Timer';

export type OnBoardingStackParamList = {
  SelectGender: undefined;
  UploadSelfie: undefined;
  ChoosePlan: undefined;
  Payment: undefined;
  Timer: undefined;
};

const screenOptions: StackNavigationOptions = {
  headerShown: false,
};

const Stack = createStackNavigator<OnBoardingStackParamList>();

export const OnBoardingStack: React.FC = () => (
  <Stack.Navigator
    initialRouteName="SelectGender"
    screenOptions={screenOptions}>
    <Stack.Screen name="SelectGender" component={SelectGender} />
    <Stack.Screen name="UploadSelfie" component={UploadSelfie} />
    <Stack.Screen name="ChoosePlan" component={ChoosePlan} />
    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="Timer" component={Timer} />
  </Stack.Navigator>
);
