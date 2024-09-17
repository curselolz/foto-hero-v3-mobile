import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import DashboardHome from '../../screens/DashboardHome/DashboardHome';
import ChoosePlan from '../../screens/OnBoarding/ChoosePlan';
import FAQ from '../../screens/DashboardHome/FAQ';
import Payment from '../../screens/OnBoarding/Payment';
import Profile from '../../screens/DashboardHome/Profile';
import {DashboardSvg} from '../../assets/svg-icons/DashboardSvg';
import Icons from '../../assets';

type TabParamList = {
  DashboardHome: undefined;
  ChoosePlan: undefined;
  Payment: undefined;
  FAQ: undefined;
  Profile: undefined;
};

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarStyle: {
    height: 84,
    backgroundColor: '#000',
    borderTopWidth: 0,
  },
  tabBarLabel: () => null,
  tabBarActiveTintColor: '#BDFF00',
  tabBarInactiveTintColor: '#fff',
};

const Tab = createBottomTabNavigator<TabParamList>();

export const TabsNavigator: React.FC = () => (
  <SafeAreaProvider>
    <Tab.Navigator
      initialRouteName="DashboardHome"
      screenOptions={screenOptions}>
      <Tab.Screen
        name="DashboardHome"
        component={DashboardHome}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icons.DashboardSvg focused={focused} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="ChoosePlan"
        component={ChoosePlan}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icons.NewModelSvg focused={focused} size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icons.ChoosePlanSvg
                focused={focused}
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FAQ"
        component={FAQ}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return <Icons.FAQSvg focused={focused} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Icons.ProfileSvg focused={focused} size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  </SafeAreaProvider>
);
