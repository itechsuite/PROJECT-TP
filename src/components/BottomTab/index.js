import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../screens/HomeScreen'
import LoginScreen from '../../screens/LoginScreen'

const Tab = createBottomTabNavigator()
// const BottomTab = () => {
//     return (
//             <Tab.Navigator>
//                 <Tab.Screen name="Home" component={HomeScreen}/>
//                 <Tab.Screen name="login" component={LoginScreen}/>

//             </Tab.Navigator>
//     )
// }

export default BottomTab

