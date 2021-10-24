import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens import
import HomeScreen from '../screens/HomeScreen';
import ItemDetails from '../screens/ItemDetails';
import HistoryScreen from '../screens/HistoryScren';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';
import CartScreen from '../screens/CartScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="onboarding"  options={{headerShown:false}} component ={OnboardingScreen} /> */}
      {/* <Stack.Screen name="signup" component={SignUpScreen} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="loginemail" component={LoginEmail} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="signupemail" component={SignUpEmail} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="phonevalidation" component={PhoneValidationScreen} options={{headerShown:false}} /> */}
      {/* <Stack.Screen name="demo" component={Demo} options={{headerShown:false}} />
         <Stack.Screen name="splash" component={SplashScreen} options={{headerShown:false}} />
         <Stack.Screen name="otpverification" component={OtpVerificationScreen} options={{headerShown:false}} />
         <Stack.Screen name="verifiedscreen" component={VerifiedScreen} options={{headerShown:false}} />
          */}
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="itemdetails"
        component={ItemDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="history"
        component={HistoryScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="customerSupport"
        component={CustomerSupportScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen 

          name="trackOrder"
          component ={TrackOrderScreen}
        

      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
