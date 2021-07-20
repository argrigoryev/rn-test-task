import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AboutTabScreen from '../screens/AboutTabScreen';
import QuotesTabScreen from '../screens/QuotesTabScreen';
import { AboutTabParamList, BottomTabParamList, QuotesTabParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="About"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="About"
        component={AboutTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-information-circle-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Quotes"
        component={QuotesTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-stats-chart-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const AboutTabStack = createStackNavigator<AboutTabParamList>();

function AboutTabNavigator() {
  return (
    <AboutTabStack.Navigator>
      <AboutTabStack.Screen
        name="AboutTabScreen"
        component={AboutTabScreen}
        options={{ headerTitle: 'About' }}
      />
    </AboutTabStack.Navigator>
  );
}

const QuotesTabStack = createStackNavigator<QuotesTabParamList>();

function QuotesTabNavigator() {
  return (
    <QuotesTabStack.Navigator>
      <QuotesTabStack.Screen
        name="QuotesTabScreen"
        component={QuotesTabScreen}
        options={{ headerTitle: 'Quotes' }}
      />
    </QuotesTabStack.Navigator>
  );
}
