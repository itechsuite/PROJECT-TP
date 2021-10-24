import React, {useState, useEffect} from 'react';

import {} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createNavigatorFactory,
  NavigationContainer,
} from '@react-navigation/native';
import FirstTimeStack from '../navigation/FirstTimeStack';
import DrawerNavigator from '../navigation/DrawerNavigator';
import ActivityIndicatorScreen from '../screens/ActivityIndicator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavigator = createNativeStackNavigator();

const StackRoute = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);

  useEffect(() => {
    try {
      AsyncStorage.getItem('token').then(res => {
        if (res) {
          setIsSignedIn(true);
        }
      });
    } catch (error) {
      setIsSignedIn(false);
    }
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator.Navigator
        initialRouteName="authindicator"
        screenOptions={{
          headerShown: false,
        }}>
        <AppNavigator.Screen
          name="authindicator"
          component={ActivityIndicatorScreen}
        />

        

        <AppNavigator.Screen name="app" component={DrawerNavigator} />

        <AppNavigator.Screen name="auth" component={FirstTimeStack} />
      </AppNavigator.Navigator>
    </NavigationContainer>
  );
};

export default StackRoute;
