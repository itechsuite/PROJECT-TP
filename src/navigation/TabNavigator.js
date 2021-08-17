import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import {Ionicons} from 'react-native-vector-icons/Ionicons'
import StackNavigator from './StackNavigator'
import OnboardingScreen from '../screens/OnboardingScreen'
import SearchScreen from '../screens/SearchScreen'
import OrdersScreen from '../screens/OrdersScreen'
import AccountScreen from '../screens/AccountScreen'


const BottomTab  = createBottomTabNavigator()
const TabNavigator = () => {
    return (
       <BottomTab.Navigator screenOptions={
           ({route}) => ({
               tabBarIcon:({focused, color, size}) => {
                   let iconName;

                   if  (route.name === 'Home'){
                    //    iconName= ''
                   }

               }, 
               headerShown:false,

           })
       }>
           <BottomTab.Screen name="Home" component={StackNavigator}/>
           <BottomTab.Screen name="search" component={SearchScreen}/>
           <BottomTab.Screen name="orders" component={OrdersScreen}/>
           <BottomTab.Screen  name="account" component={AccountScreen}/>
       </BottomTab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({})
