import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createDrawerNavigator } from '@react-navigation/drawer'
import TabNavigator from './TabNavigator'
import AccountScreen from '../screens/AccountScreen'

const Drawer = createDrawerNavigator()


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown:false
        }} >
            <Drawer.Screen name="main" component={TabNavigator} />
            {/* <Drawer.Screen name="Account" component={AccountScreen} /> */}
        

        </Drawer.Navigator>
    )
}

export default DrawerNavigator
