import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Ionicons} from 'react-native-vector-icons/Ionicons'
import StackNavigator from './StackNavigator';
import SearchScreen from '../screens/SearchScreen';
import AccountScreen from '../screens/AccountScreen';
import OrdersScreen from '../screens/OrdersScreen';
import SplashScreen from '../screens/SplashScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        headerShown: false,
      })}>
      <BottomTab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          //   tabBarLabel:'SMOME'
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="newspaper-sharp" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-box"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
